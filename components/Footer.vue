<template>
  <footer
    class="fixed bottom-0 left-0 z-20 flex w-full items-center justify-between p-8"
  >
    <div
      ref="info"
      class="flex flex-col text-xs font-medium uppercase text-black"
    >
      <p ref="info_titles" class="letter-wrapper">
        <span>Founder | Designer | Developer</span>
      </p>
      <p ref="info_availability" class="letter-wrapper">
        <span>Available Nov. 2025</span>
      </p>
    </div>

    <div ref="socials" class="letter-wrapper items-center justify-center">
      <div class="flex gap-3">
        <GitHub class="icon size-5" />
        <LinkedIn class="icon size-5" />
        <Email class="icon size-5" />
      </div>
    </div>
  </footer>
</template>

<script setup>
  import gsap from 'gsap';
  import { useAppStore } from '@/stores/appStore';

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);

  // Watch pageLoaded for changes. If change run the gsap animation.
  watch(pageLoaded, (val) => {
    if (val) {
      gsap.to(['.letter-wrapper span', '.icon'], {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  });
</script>

<style scoped>
  .letter-wrapper {
    display: inline-block;
    height: 1.5em;
    overflow: hidden;
  }

  .letter-wrapper span {
    display: inline-block;
    transform: translateY(100%);
    opacity: 0;
  }

  .icon {
    display: inline-block;
    transform: translateY(100%);
    opacity: 0;
  }
</style>
