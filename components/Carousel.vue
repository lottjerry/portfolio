<template>
  <div class="h-dvh w-dvw overflow-hidden">
    <nav class="fixed left-0 top-0 z-10 flex w-dvw justify-between p-11">
      <p class="relative -top-3 text-5xl font-medium uppercase text-black">
        Jerry L.
      </p>
      <p class="font-medium uppercase text-black">Resume</p>
    </nav>
    <footer class="fixed bottom-0 left-0 z-10 flex w-dvw justify-between p-11">
      <p class="font-medium uppercase text-black">
        © 2025 Jerry Lott Portfolio
      </p>
      <p class="font-medium uppercase text-black">Social Media Links</p>
    </footer>
    <div
      ref="bgOverlay"
      class="fixed left-0 top-0 flex h-dvh w-dvw items-center justify-center bg-[rgb(213,183,71)] opacity-50 brightness-75"
    >
      <div>
        <button @click="swapBackgroundColor()">Swap Background Color</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import CustomEase from 'gsap/CustomEase';

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

<style></style>
