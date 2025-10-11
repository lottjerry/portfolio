<template>
  <div
    ref="loader"
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black"
  >
    <div class="flex flex-col items-center justify-center gap-5">
      <div ref="loader_logo" :class="load_Complete ? '' : 'animate-pulse'">
        <AnimationLogo ref="animationLogo" />
      </div>
      <div ref="loader_lottie">
        <client-only>
          <Vue3Lottie
            :animationLink="animationLink"
            :height="60"
            :speed="1.3"
            :loop="false"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import { useAppStore } from '@/stores/appStore';

  // Create references for the loader elements
  const appStore = useAppStore()
  const loader = ref(null);
  const animationLogo = ref(null);
  const loader_logo = ref(null);
  const loader_lottie = ref(null);
  const load_Complete = ref(false);
  const emit = defineEmits(['loaded']);

  // Handle the page load
  const nuxtApp = useNuxtApp();

  // Lottie animation link
  const animationLink = ref(
    'https://lottie.host/25ebff75-f929-458f-8f08-d6a4ccfb9076/bHX7EvaQfY.json',
  );

  nuxtApp.hook('app:suspense:resolve', () => {
    load_Complete.value = true;
  });

  const exitLoader = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      animationLogo.value.greenCircle,
      { strokeDasharray: '360', strokeDashoffset: '360' },
      {
        strokeDashoffset: '0',
       // delay: 2,
        //duration: 1.8,
        duration: 0.5,
        ease: 'power2.inOut',
        stroke: 'black',
      },
    );

    // Loader logo animation
    tl.to(loader_logo.value, {
      opacity: 0,
      duration: 1,
      x: -100,
    });

    // Loader exit animation
    tl.to(loader.value, {
      duration: 1,
      x: '-100%',
      ease: 'power4.inOut',
      onComplete: () => {
        emit('loaded');
        appStore.pageLoaded = true;
        console.log(appStore.pageLoaded)
      },
    });
  };

  const startAnimations = () => {
    gsap.fromTo(
      animationLogo.value.whiteCircle,
      { strokeDasharray: '360', strokeDashoffset: '360' },
      {
        strokeDashoffset: '0',
        stroke: 'white',
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          if (load_Complete) {
            exitLoader();
          }
        },
      },
    );
  };

  onMounted(() => {
    startAnimations();
  });
</script>
