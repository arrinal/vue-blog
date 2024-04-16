<template>
  <div class="content mx-auto flex max-w-4xl flex-col border border-dotted border-lime-600 text-base-content" v-if="article.attributes">
    <div class="flex flex-col border border-dotted border-lime-600">
      <h3 class="flex border-b-2 border-dotted border-lime-600 p-4">{{ article.attributes.title }}</h3>
      <div class="flex border-b-2 border-dotted border-lime-600">
        <span class="flex items-center border-r-2 border-dotted border-lime-600 p-4">{{ formattedDate }}</span>
        <span class="flex items-center border-r-2 border-dotted border-lime-600 p-4" v-for="tag in tags" :key="tag.id">
          {{ tag.attributes.name }}
        </span>
      </div>
      <div class="prose prose-sm max-w-none p-4 text-left" v-html="parseMarkdown(article.attributes.content)"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { marked } from "marked";

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
      return new Intl.DateTimeFormat("en-UK", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(date);
    },
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
          if (error.response && error.response.status === 404) {
            this.$router.push({ name: "NotFound" });
          }
        });
    },
    parseMarkdown(markdownText) {
      let html = marked(markdownText, { sanitize: true });

      const parsedHtml = new DOMParser().parseFromString(html, "text/html");
      const images = parsedHtml.querySelectorAll("img");
      images.forEach((image) => {
        image.classList.add("border", "border-dotted", "p-2", "border-lime-600", "text-center", "block", "mx-auto");
      });

      html = parsedHtml.body.innerHTML;

      return html;
    },
  },
};
</script>
