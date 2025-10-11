<template>
  <div class="font-ppneue relative flex h-dvh w-dvw flex-col overflow-hidden">
    <!-- Top Navigation -->
    <nav class="fixed left-0 top-0 z-20 flex w-full justify-between p-11">
      <p
        ref="logo"
        class="font-timmons relative -top-3 text-5xl font-medium uppercase text-black"
      >
        Jerry Lott
      </p>
      <p ref="resume" class="font-medium uppercase text-black">Resume</p>
    </nav>

    <!-- Background Overlay (behind Swiper) -->
    <div
      ref="bgOverlay"
      class="fixed left-0 top-0 z-0 flex h-dvh w-dvw items-center justify-center bg-[rgb(213,183,71)] opacity-50 brightness-75"
    ></div>

    <!-- Main Content -->
    <div class="mt-32 flex h-dvh w-dvw flex-col gap-10">
      <!-- Custom Pagination Bullets ABOVE the slider -->
      <div class="custom-swiper-pagination text-center"></div>

      <!-- Swiper Slider -->
      <Swiper
        :modules="modules"
        :pagination="pagination"
        :speed="1200"
        class="h-[70%] w-full"
      >
        <SwiperSlide class="swiper-slide opacity-75">
          <img
            src="/assets/images/img1.jpg"
            alt=""
            class="slide-image h-[80%] w-1/2"
          />

          <div
            class="absolute bottom-10 h-full w-3/5 text-[21rem] leading-none"
          >
            <!-- Top Row: HEY -->
            <div class="ml-20 grid grid-cols-4">
              <div class="font-timmons">H</div>
              <div class="font-timmons">E</div>
              <div class="font-timmons"></div>
              <div class="font-timmons">Y</div>
            </div>
            <!-- Bottom Row: WORLD -->
            <div class="grid grid-cols-7">
              <div class="font-timmons"></div>
              <div class="font-timmons">W</div>
              <div class="font-timmons">O</div>
              <div class="font-timmons"></div>
              <div class="font-timmons">R</div>
              <div class="font-timmons">L</div>
              <div class="font-timmons">D</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide opacity-75">
          <img src="/assets/images/img2.jpg" alt="" class="slide-image h-[80%] w-1/2" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide opacity-75">
          <img src="/assets/images/img3.jpg" alt="" class="slide-image h-[80%] w-1/2" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Footer -->
    <footer class="fixed bottom-0 left-0 z-20 flex w-full justify-between p-11">
      <p ref="copyright" class="font-medium uppercase text-black">
        © 2025 Jerry Lott Portfolio
      </p>
      <p ref="social" class="font-medium uppercase text-black">
        Social Media Links
      </p>
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
    el: '.custom-swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      const number = (index + 1).toString().padStart(2, '0');
      return `<div class="${className}" data-index="${index}">${number}</div>`;
    },
  };

  const bgOverlay = ref(null);
  const logo = ref(null);
  const resume = ref(null);
  const copyright = ref(null);
  const social = ref(null);

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
    gsap.to([logo.value, resume.value, copyright.value, social.value], {
      color: newColor,
      duration: 1.5,
      ease: 'hop',
    });
  };

  let swiperInstance = null;

  function addTitleToActiveBullet(activeIndex) {
    const bullets = document.querySelectorAll('.custom-swiper-pagination div');

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
          ease: 'power1.out',
          delay: 0.125,
        });
      }
    });
  }

  function animateSlide(index) {
    const slides = document.querySelectorAll('.swiper-slide');
    const current = slides[index];
    const image = current?.querySelector('.slide-image');

    if (image) {
      gsap.fromTo(
        image,
        {
          y: 50,
          scale: 0.8,
        },
        {
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: 'power5.out', // starts fast, ends slow
          delay: 0.1,
        },
      );
    }
  }

  onMounted(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      'hop',
      'M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1',
    );

    setTimeout(() => {
      swiperInstance = document.querySelector('.swiper')?.swiper;

      if (swiperInstance) {
        // Animate initial slide
        animateSlide(swiperInstance.realIndex);
        addTitleToActiveBullet(swiperInstance.realIndex);

        // On slide change
        swiperInstance.on('slideChangeTransitionStart', () => {
          const index = swiperInstance.realIndex;
          animateSlide(index);
          addTitleToActiveBullet(index);

          // Swap background color on slide change
          swapBackgroundColor();
        });
      }
    }, 0);
  });

  onBeforeUnmount(() => {
    if (swiperInstance) {
      swiperInstance.off('slideChange');
    }
  });
</script>

<style>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-wrapper {
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1) !important;
  }

  /* Remove Swiper's default bullet styles */
  .custom-swiper-pagination .swiper-pagination-bullet {
    all: unset; /* Remove all default styles */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: 0.3;
    cursor: pointer;
    font-size: 1.3rem;
  }

  /* Active bullet styling */
  .custom-swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    transition: opacity 3s;
    padding: 5px;
    color: black;
    font-weight: 500;
  }
</style>
