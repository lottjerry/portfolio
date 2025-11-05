<template>
  <div>
    <div id="swiper-pagination" class="flex gap-2"></div>
  </div>
</template>

<script setup></script>

<style scoped>
  #swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.swiper-pagination-bullet) {
    all: unset; /* Remove all default styles */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  :deep(.swiper-pagination-bullet-active) {
    color: black;
    font-weight: 500;
  }
</style>
