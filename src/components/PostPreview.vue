<template>
  <div class="mx-auto grid max-w-4xl grid-cols-[160px_1fr] border-x-2 border-t-2 border-dotted border-lime-600 text-base-content sm:grid-cols-[256px_1fr]">
    <div class="flex items-center justify-center border-x-2 border-t-2 border-dotted border-lime-600 p-4">
      <RoundedImage :imageSrc="imageSrc" />
    </div>
    <div class="flex flex-col justify-between border-x-2 border-t-2 border-dotted border-lime-600 p-4 text-left">
      <a :href="link" class="line-clamp-3 hover:text-lime-200">{{ title }}</a>
      <div class="flex">
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import RoundedImage from "./RoundedImage.vue";

export default {
  name: "PostPreview",
  components: {
    RoundedImage,
  },
  props: {
    title: String,
    link: String,
    date: String,
    tags: Array,
    imageSrc: String,
  },
};
</script>
