<template>
  <img :src="imageSrc" :alt="imageSrc" class="rounded-lg object-cover sm:h-32 sm:w-64" />
</template>

<script>
export default {
  name: "RoundedImage",
  props: {
    imageSrc: String,
  },
};
</script>
