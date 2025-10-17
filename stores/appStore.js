import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', () => {
  const pageLoaded = ref(false);
  const carouselIndex = ref(null);

  return { pageLoaded, carouselIndex };
});
