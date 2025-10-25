<template>
  <nav class="fixed left-0 top-0 flex w-full justify-between p-8">
    <!-- LOGO -->
    <h1 class="font-timmons text-5xl uppercase">
      <span class="letter-wrapper"><span>J</span></span>
      <span class="letter-wrapper"><span>e</span></span>
      <span class="letter-wrapper"><span>r</span></span>
      <span class="letter-wrapper"><span>r</span></span>
      <span class="letter-wrapper"><span>y</span></span>
    </h1>
    <!-- SWIPER PAGINATION -->
    <SwiperPagination />
    <!-- ABOUT -->
    <h2 class="text-lg font-medium uppercase">
      <span class="letter-wrapper"><span>J</span></span>
      <span class="letter-wrapper"><span>e</span></span>
      <span class="letter-wrapper"><span>r</span></span>
      <span class="letter-wrapper"><span>r</span></span>
      <span class="letter-wrapper"><span>y</span></span>
    </h2>
  </nav>
</template>

<script setup>
  import gsap from 'gsap';
  import { useAppStore } from '@/stores/appStore';
import SwiperPagination from './SwiperPagination.vue';

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);

  // Watch pageLoaded for changes. If change run the gsap animation.
  watch(pageLoaded, (val) => {
    if (val) {
      gsap.to(['.letter-wrapper span'], {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  });
</script>

<style scoped>
  .letter-wrapper {
    display: inline-block;
    overflow: hidden;
  }

  .letter-wrapper span {
    display: inline-block;
    transform: translateX(-100%);
    opacity: 0;
  }

  #swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
