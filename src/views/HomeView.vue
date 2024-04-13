<template>
  <div class="home">
    <div v-for="preview in previews" :key="preview.id">
      <PostPreview :title="preview.attributes.title" :link="'/#/content/' + preview.id" :date="formatDate(preview.attributes.publishedAt)" :imageSrc="'http://localhost:1337' + preview.attributes.cover.data.attributes.formats.thumbnail.url"/>
    </div>
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import PostPreview from "../components/PostPreview.vue";

export default {
  name: "HomeView",
  components: {
    PostPreview,
  },
  data() {
    return {
      previews: [],
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      axios.get("http://localhost:1337/api/previews?populate=*")
        .then((response) => {
          this.previews = response.data.data;
        })
        .catch((error) => {
          console.log("Error fetching articles:", error);
        });
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
    }
  },
};
</script>
