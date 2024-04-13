<template>
  <div class="home">
    <div class="flex justify-center">
      <img class="h-auto max-w-full" alt="Vue logo" src="../assets/logo.png" />
    </div>
    <button class="btn">Hello daisyui</button>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.attributes.title }}</h2>
      <p class="text-base-content">{{ article.attributes.content }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      axios
        .get("http://localhost:1337/api/articles")
        .then((response) => {
          this.articles = response.data.data;
        })
        .catch((error) => {
          console.log("Error fetching articles:", error);
        });
    },
  },
};
</script>
