import { defineStore } from 'pinia';

export const useSwiperStore = defineStore('swiper', () => {
  const activeIndex = ref(0);
  const totalSlides = ref(4);
  let swiperInstance = null;

  function setSwiper(swiper) {
    swiperInstance = swiper;
  }

  function setActiveIndex(index) {
    activeIndex.value = index;
  }

  function slideTo(index) {
    if (swiperInstance) swiperInstance.slideTo(index);
  }

  return { activeIndex, totalSlides, setSwiper, setActiveIndex, slideTo };
});
