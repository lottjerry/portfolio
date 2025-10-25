<template>
  <div class="h-1/2 w-dvw mt-20"> <!-- add top margin to make space for nav -->
    <swiper
      class="border-3 border border-red-500"
      :modules="[Pagination]"
      :pagination="{
        el: '#swiper-pagination', // target element in SwiperPagination
        clickable: true,
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" class="slide-image w-1/2" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Vite import images automatically
const images = Object.values(
  import.meta.glob('@/assets/slider-images/*.jpg', {
    eager: true,
    import: 'default',
  }),
);
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
