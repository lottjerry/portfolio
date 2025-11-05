<template>
  <div class="flex justify-center">
    <div v-for="i in store.totalSlides" :key="i" @click="goToSlide(i - 1)">
      <PaginationBullet
        :current="pad(i)"
        :total="pad(store.totalSlides)"
        :active="store.activeIndex === i - 1"
      />
    </div>
  </div>
</template>

<script setup>
  import { useSwiperStore } from '~/stores/swiperStore';
  import PaginationBullet from './PaginationBullet.vue';

  const store = useSwiperStore();

  function goToSlide(index) {
    store.slideTo(index);
  }

  // Format current and total with leading zeroes (optional)
  function pad(num) {
    return num.toString().padStart(2, '0');
  }
</script>
