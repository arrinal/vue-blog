<template>
  <div class="btn-group">
    <button v-for="page in pagesToShow" :key="page"
      :class="{ 'btn-active': page === currentPage, 'btn-inactive': page !== currentPage }" class="btn btn-sm rounded-none m-1 mt-4"
      @click.prevent="goToPage(page)">
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    pagesToShow: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToPage(page) {
      this.$router.push({ name: 'home-page', params: { page: page } });
    },
  }
};
</script>

<style scoped>
.btn-active {
  @apply cursor-not-allowed pointer-events-none bg-green-500 text-black;
}

.btn-inactive {
  @apply opacity-50 hover:text-white;
}
</style>
