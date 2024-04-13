<template>
  <div class="about">
    <PostView title="Babibu" />
    <PostView />
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
    <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content"></div>
  </div>
</template>

<script>
import PostView from "../components/PostView.vue";

export default {
  name: "AboutView",
  components: {
    PostView,
  },
};
</script>
