<template>
  <div class="mt-20 h-1/2 w-dvw">
    <!-- add top margin to make space for nav -->
    <swiper
      :modules="modules"
      :pagination="pagination"
      class="border-3 border border-red-500"
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

  // ******* SWIPER CONFIG  ******* //
  const modules = [Pagination];

  const pagination = {
    el: '#swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      const number = (index + 1).toString().padStart(2, '0');
      return `<div class="${className}" data-index="${index}">${number}</div>`;
    },
  };

  // Vite import images automatically
  const images = Object.values(
    import.meta.glob('@/assets/slider-images/*.jpg', {
      eager: true,
      import: 'default',
    }),
  );

  onMounted(()=> {
    
  })
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
