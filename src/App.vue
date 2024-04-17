<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- | -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.classList.add('scale-95', 'origin-top', 'ease-in-out');
});
</script>
