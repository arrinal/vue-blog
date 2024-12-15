<template>
  <img :src="imageSrc" :alt="imageSrc" class="rounded-lg object-cover sm:h-24 sm:w-48 md:h-32 md:w-64" />
</template>

<script>
export default {
  name: "RoundedImage",
  props: {
    imageSrc: String,
  },
};
</script>
