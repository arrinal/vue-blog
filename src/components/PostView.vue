<template>
  <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-lime-200">
    <div class="border-x-2 border-t-2 border-dotted border-lime-600 p-4">
      <RoundedImage />
    </div>
    <div class="flex flex-grow flex-col justify-between border-x-2 border-t-2 border-dotted border-lime-600 p-4 text-left">
      <h5 class="line-clamp-3">{{ title }}</h5>
      <span>Post Information</span>
    </div>
  </div>
</template>

<script>
import RoundedImage from "./RoundedImage.vue";

export default {
  name: "PostView",
  components: {
    RoundedImage,
  },
  props: {
    title: String,
  },
};
</script>
