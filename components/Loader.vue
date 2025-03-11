<template>
  <div ref="loader" class="flex items-center justify-center bg-black inset-0 fixed z-[999]">
    <h1 class="text-purple-600">Loading ...</h1>
  </div>
</template>

<script setup>
import gsap from 'gsap';

const loader = ref(null);
const emit = defineEmits(['loaded']);

onMounted(() => {
  gsap.to(loader.value, {
    opacity: 0,
    duration: 1,
    y: -100,
    delay: 2,
    onComplete: () => {
      emit('loaded');
    },
  });
});
</script>

