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
    opacity: 0.5;
    cursor: pointer;
    background: none;
    color: #333;
    font-weight: 600;
    font-size: 1rem;
  }

  :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
  }
</style>
