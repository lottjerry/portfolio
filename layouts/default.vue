<template>
  <div
    class="relative flex h-dvh flex-col items-center justify-between bg-gray-500 p-5"
  >
    <header class="relative z-50 flex w-full justify-center">
      <Logo />
      <Navbar />
    </header>

    <!-- Background Overlay -->
    <div ref="background" class="fixed inset-0 z-30 bg-black"></div>

    <main class="relative z-20 text-white">
      <slot />
    </main>

    <footer class="relative z-50 p-5">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
  import gsap from 'gsap';

  const background = ref(null);
  const router = useRouter();

  onMounted(() => {
    gsap.set(background.value, { x: '-100vw' });
  });

  router.beforeEach((to, from, next) => {
    const tl = gsap.timeline();

    tl.to(background.value, {
      x: '0vw',
      duration: 0.6,
      ease: 'power4.in',
      onComplete: () => {
        next();
      },
    })
      .to(background.value, {
        x: '100vw',
        delay: 0.2,
        duration: 0.6,
        ease: 'power4.in',
      })
      .set(background.value, { x: '-100vw' });
  });
</script>
