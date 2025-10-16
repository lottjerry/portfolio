<template>
  <main>
    <div class="flex justify-between text-xs">
      <!-- NUMERALS & CATEGORIES -->
      <div class="flex gap-5">
        <div class="flex flex-col">
          <p
            class="letter-wrapper"
            v-for="(numeral, index) in portfolioInfo[0].Numerals"
            :key="index"
          >
            <span>{{ numeral }}</span>
          </p>
        </div>
        <div class="flex flex-col">
          <p
            class="letter-wrapper"
            v-for="(category, index) in portfolioInfo[0].Categories"
            :key="index"
          >
            <span>{{ category }}</span>
          </p>
        </div>
      </div>
      <!-- CATEGORY RESPONSES -->
      <div class="flex flex-col">
        <p
          class="letter-wrapper"
          v-for="(catResponse, index) in portfolioInfo[0].CatResponses"
          :key="index"
        >
          <span>{{ catResponse }}</span>
        </p>
      </div>
      <!-- EXPLORE BUTTON -->
      <div class="flex flex-col items-center gap-2">
        <div ref="exploreBtn" class="info letter-wrapper">
          <Explore class="icon size-5" />
        </div>
        <p ref="exploreText" class="letter-wrapper text-xs font-medium">
          <span>Explore</span>
        </p>
      </div>
      <!-- DESCRIPTION -->
      <p class="letter-wrapper w-[40%]">
        <span>{{ portfolioInfo[0].Description }}</span>
      </p>
    </div>
  </main>
</template>

<script setup>
  import gsap from 'gsap';
  import { useAppStore } from '@/stores/appStore';

  const portfolioInfo = [
    {
      Numerals: ['I', 'II', 'III', 'IV'],
      Categories: ['Completed', 'Type', 'Role', 'Client'],
      CatResponses: [
        'August 2022',
        'Promotional',
        'Designer & Developer',
        'Faith McKim',
      ],
      Description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam itaque quaerat explicabo earum nostrum.',
    },
  ];
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
    overflow: hidden;
  }

  .letter-wrapper span {
    display: inline-block;
    transform: translateY(-100%);
    opacity: 0;
  }

  .icon {
    display: inline-block;
    transform: translateY(100%);
    opacity: 0;
  }
</style>
