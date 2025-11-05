<template>
  <Swiper
    :modules="modules"
    :pagination="false"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="my-swiper"
  >
    <SwiperSlide v-for="(slide, i) in slides" :key="i">
      <div class="flex h-48 items-center justify-center text-3xl font-bold">
        {{ slide }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { useSwiperStore } from '~/stores/swiperStore';

const store = useSwiperStore();

const slides = ['A', 'B', 'C', 'D'];

function onSwiper(swiper) {
  store.setSwiper(swiper);
}

function onSlideChange(swiper) {
  store.setActiveIndex(swiper.activeIndex);
}

const modules = [Pagination];
</script>

<style scoped>
.my-swiper {
  width: 100%;
  height: 250px;
}
</style>
