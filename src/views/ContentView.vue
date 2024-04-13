<template>
  <div class="content mx-auto flex max-w-4xl border border-dotted border-lime-600 text-base-content flex-col"
    v-if="article.attributes">
    <div class="flex flex-col border border-dotted border-lime-600 text-left">
      <h3 class="flex border-b-2 border-dotted border-lime-600 p-4">{{ article.attributes.title }}</h3>
      <div class="flex border-b-2 border-dotted border-lime-600">
        <span class="flex border-r-2 border-dotted border-lime-600 p-4 items-center">{{ formattedDate }}</span>
        <span class="flex border-r-2 border-dotted border-lime-600 p-4 items-center" v-for="tag in tags" :key="tag.id">
          {{ tag.attributes.name }}
        </span>
      </div>
      <div class="p-4">{{ article.attributes.content }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContentView",
  data() {
    return {
      article: {},
      tags: [],
      dateString: "",
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.dateString);
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
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      const articleId = this.$route.params.id;
      axios
        .get(`http://localhost:1337/api/articles/${articleId}?populate=tags`)
        .then((response) => {
          this.article = response.data.data;
          this.tags = this.article.attributes.tags.data;
          this.dateString = this.article.attributes.publishedAt;
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    },
  },
};
</script>