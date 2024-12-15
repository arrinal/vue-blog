<template>
  <div class="mx-auto grid h-32 max-w-4xl grid-cols-[150px_1fr] border-x-2 border-t-2 border-dotted border-lime-600 text-base-content md:h-40 md:grid-cols-[256px_1fr] sm:grid-cols-[192px_1fr]">
    <div class="flex h-full items-center justify-center border-x-2 border-t-2 border-dotted border-lime-600 p-4">
      <RoundedImage :imageSrc="imageSrc" />
    </div>
    <div class="flex h-full flex-col justify-between border-x-2 border-t-2 border-dotted border-lime-600 p-4 text-left">
      <a :href="link" class="line-clamp-3 hover:text-lime-200">{{ title }}</a>
      <div class="flex">
        <span class="line-clamp-1">{{ date }}</span>
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
