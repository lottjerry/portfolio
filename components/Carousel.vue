<template>
  <div class="font-ppneue relative flex h-dvh w-dvw flex-col overflow-hidden">
    <!-- Top Navigation -->
    <nav class="fixed left-0 top-0 z-20 flex w-full justify-between p-11">
      <p
        class="font-timmons relative -top-3 text-5xl font-medium uppercase text-black"
      >
        Jerry Lott
      </p>
      <p class="font-medium uppercase text-black">Resume</p>
    </nav>

    <!-- Background Overlay (behind Swiper) -->
    <div
      ref="bgOverlay"
      class="fixed left-0 top-0 z-0 flex h-dvh w-dvw items-center justify-center bg-[rgb(213,183,71)] opacity-50 brightness-75"
    >
      <div>
        <button
          @click="swapBackgroundColor()"
          class="rounded bg-white px-4 py-2 shadow"
        >
          Swap Background Color
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="z-10 flex h-dvh w-dvw flex-1 flex-col items-center justify-center space-y-6"
    >
      <!-- Custom Pagination Bullets ABOVE the slider -->
      <div class="custom-swiper-pagination"></div>

      <!-- Swiper Slider -->
      <Swiper :modules="modules" :pagination="pagination" class="h-1/2 w-full">
        <SwiperSlide class="swiper-slide">
          <img src="/assets/images/img1.jpg" alt="" class="w-1/2" />
        </SwiperSlide>
        <SwiperSlide
          class="swiper-slide"
        >
          <img src="/assets/images/img2.jpg" alt="" class="w-1/2" />
        </SwiperSlide>
        <SwiperSlide
          class="swiper-slide"
        >
          <img src="/assets/images/img3.jpg" alt="" class="w-1/2" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Footer -->
    <footer class="fixed bottom-0 left-0 z-20 flex w-full justify-between p-11">
      <p class="font-medium uppercase text-black">
        © 2025 Jerry Lott Portfolio
      </p>
      <p class="font-medium uppercase text-black">Social Media Links</p>
    </footer>
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import CustomEase from 'gsap/CustomEase';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // Swiper config
  const modules = [Pagination];

  const pagination = {
    el: '.custom-swiper-pagination', // Connect to our manual container
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className} w-4 h-4 bg-gray-300 rounded-full inline-block"></span>`;
    },
  };

  const bgOverlay = ref(null);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const swapBackgroundColor = () => {
    const newColor = getRandomColor();
    gsap.to(bgOverlay.value, {
      backgroundColor: newColor,
      duration: 1.5,
      ease: 'hop',
    });
  };

  onMounted(() => {
    gsap.registerPlugin(CustomEase);

    // Create custom ease
    CustomEase.create(
      'hop',
      'M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1',
    );
  });
</script>

<style>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Add this to your <style> section */
  .swiper-pagination-bullet {
    @apply mx-1;
    transition: background-color 0.3s;
  }

  .swiper-pagination-bullet-active {
    @apply bg-black;
  }
</style>
