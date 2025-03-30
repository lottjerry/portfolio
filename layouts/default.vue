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

    <main class="relative z-20">
      <div ref="item">
        <slot />
      </div>
    </main>

    <footer class="relative z-50 p-5">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
  import gsap from 'gsap';

  const hidden = ref(true);
  const background = ref(null);
  const item = ref(null);
  const router = useRouter();

  onMounted(() => {
    gsap.set(background.value, { x: '-100vw' });
    const tl = gsap.timeline();

    tl.set(item.value, {
      y: '-100',
      opacity: 0,
    }).to(item.value, {
      y: '0',
      delay: 4.2,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.in',
    });
    console.log('mounted');
  });

  router.beforeEach((to, from, next) => {
    const tl = gsap.timeline();

    tl.to(background.value, {
      x: '0vw',
      duration: 0.6,
      ease: 'power4.in',
      onComplete: () => {
        next();
        gsap.set(item.value, {
          y: '100',
          opacity: 0,
        });
      },
    })
      .to(background.value, {
        x: '100vw',
        delay: 0.2,
        duration: 0.6,
        ease: 'power4.in',
      })
      .set(background.value, {
        x: '-100vw',
      })
      .to(item.value, {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.in',
      });
  });
</script>
