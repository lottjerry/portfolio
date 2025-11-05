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
  import gsap from 'gsap';
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

  function addTitleToActiveBullet(activeIndex) {
    const bullets = document.querySelectorAll('#swiper-pagination div');

    bullets.forEach((bullet, i) => {
      const number = (i + 1).toString().padStart(2, '0');

      // Reset the innerHTML for each bullet
      if (i === activeIndex) {
        bullet.innerHTML = `
        <span class="bullet-number mr-1 justify-start">${number} </span>
        <span class="bullet-separator active-separator">
          <svg width="3px" height="24px" viewBox="0 0 4 24" xmlns="http://www.w3.org/2000/svg" fill="#31373D">
            <rect x="0" y="0" width="3" height="24" rx="2" />
          </svg>
        </span>
        <span class="bullet-total ml-1"> 06</span>
      `;

        // Animate the whole bullet padding
        gsap.to(bullet, {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          duration: 1,
          ease: 'power2.out',
          delay: 0.125,
        });

        // Animate number from left
        gsap.fromTo(
          bullet.querySelector('.bullet-number'),
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.75, ease: 'power2.out', delay: 0.15 },
        );

        // Animate "06" from right
        gsap.fromTo(
          bullet.querySelector('.bullet-total'),
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.75, ease: 'power2.out', delay: 0.15 },
        );

        gsap.to(bullet.querySelector('.bullet-number'), {
          duration: 1,
          ease: 'power2.out',
        });

        gsap.to(bullet.querySelector('.bullet-total'), {
          duration: 1,
          ease: 'power2.out',
        });

        gsap.to(bullet.querySelector('.bullet-separator svg'), {
          duration: 1,
          ease: 'power2.out',
        });
      } else {
        bullet.innerHTML = `
        <span class="bullet-separator">
          <svg width="20px" height="20px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="#31373D">
            <path d="M25 24a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12z"/>
          </svg>
        </span>
      `;

        gsap.to(bullet, {
          paddingLeft: '0rem',
          paddingRight: '0rem',
          duration: 1,
          ease: 'power2.out',
          delay: 0.125,
        });

        gsap.to(bullet.querySelector('svg'), {
          duration: 1,
          ease: 'power2.out',
        });
      }
    });
  }

  onMounted(() => {
    let swiperInstance = document.querySelector('.swiper')?.swiper;

    if (swiperInstance) {
      addTitleToActiveBullet(swiperInstance.realIndex);

      swiperInstance.on('slideChange', () => {
        const index = swiperInstance.realIndex;
        addTitleToActiveBullet(index);
      });
    }
  });
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
