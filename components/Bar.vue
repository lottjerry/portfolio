<!-- Bar.vue -->
<template>
  <svg
    width=""
    height="48"
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      ref="line"
      d="M12 48V0"
      stroke="#000"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const line = ref(null);

// We don't animate here — parent controls it
onMounted(() => {
  // Set initial state: shorter height (half length)
  gsap.set(line.value, {
    scaleY: 0.4, // half height
    transformOrigin: 'center bottom', // grow from bottom up
  });
});

defineExpose({ line });
</script>
