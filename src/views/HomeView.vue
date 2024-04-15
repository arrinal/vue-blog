<template>
  <div class="home">
    <div v-for="preview in previews" :key="preview.id">
      <PostPreview :title="preview.attributes.title" :link="'/#/content/' + preview.id"
        :date="formatDate(preview.attributes.publishedAt)" :imageSrc="preview.attributes.cover.data
      ? 'http://localhost:1337' + preview.attributes.cover.data.attributes.formats.thumbnail.url
      : 'http://localhost:1337/uploads/thumbnail_app_icon_08d147567a.png'" />
    </div>
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
    <div>
      <ul>
        <li v-for="article in articles" :key="article.id">{{ article.title }}</li>
      </ul>
      <PaginationPreview :currentPage="currentPage" :totalPages="totalPages" :pagesToShow="pagesToShow"
        @change-page="fetchArticles" />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import PostPreview from "../components/PostPreview.vue";
import PaginationPreview from '../components/PaginationPreview.vue';

export default {
  name: "HomeView",
  components: {
    PostPreview,
    PaginationPreview,
  },
  data() {
    return {
      previews: [],
      currentPage: 1,
      totalPages: 0,
      pageSize: 5, // Jumlah artikel per halaman
      visiblePages: 5, // Jumlah tombol halaman yang ingin ditampilkan
    };
  },
  computed: {
    // Hitung rentang halaman yang akan ditampilkan
    pagesToShow() {
      let startPage = this.currentPage - Math.floor(this.visiblePages / 2);
      if (startPage < 1) {
        startPage = 1;
      }

      let endPage = startPage + this.visiblePages - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = endPage - this.visiblePages + 1;
        if (startPage < 1) {
          startPage = 1;
        }
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    async fetchArticles() {
      const page = parseInt(this.$route.params.page) || 1;
      try {
        const response = await axios.get("http://localhost:1337/api/previews?populate=*&sort=publishedAt:desc", {
          params: {
            pagination: {
              page: page,
              pageSize: this.pageSize,
            },
          },
        });
        this.previews = response.data.data;
        this.currentPage = response.data.meta.pagination.page;
        this.totalPages = response.data.meta.pagination.pageCount;
      } catch (error) {
        console.log("Error fetching articles:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-UK', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(date);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('change-page', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('change-page', this.currentPage + 1);
      }
    },
  },
  created() {
    this.fetchArticles();
  },
  watch: {
    $route() {
      this.fetchArticles();
    },
  },
};
</script>
