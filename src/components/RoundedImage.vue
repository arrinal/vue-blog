<template>
  <img class="h-32 w-64 rounded-2xl object-cover" :src="imageSrc" alt="logo" />
</template>

<script>
export default {
  name: "RoundedImage",
  props: {
    imageSrc: String,
  },
};
</script>
