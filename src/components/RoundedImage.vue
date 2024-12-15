<template>
  <img :src="imageSrc" :alt="imageSrc" class="h-full w-full rounded-lg object-cover" />
</template>

<script>
export default {
  name: "RoundedImage",
  props: {
    imageSrc: String,
  },
};
</script>
