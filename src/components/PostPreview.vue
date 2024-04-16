<template>
  <div class="mx-auto flex max-w-4xl border-x-2 border-t-2 border-dotted border-lime-600 text-base-content">
    <div class="border-x-2 border-t-2 border-dotted border-lime-600 p-4">
      <RoundedImage :imageSrc="imageSrc" />
    </div>
    <div class="flex flex-grow flex-col justify-between border-x-2 border-t-2 border-dotted border-lime-600 p-4 text-left">
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
