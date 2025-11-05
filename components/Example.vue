<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center text-xs font-bold">
      <p ref="firstNumber" class="-mx-1.5 -translate-x-4 self-start opacity-0">
        01
      </p>
      <Bar ref="bar" />
      <p ref="secondNumber" class="-mx-1.5 translate-x-4 self-end opacity-0">
        06
      </p>
    </div>

    <div class="flex gap-10">
      <v-btn @click="animate" class="cursor-pointer border border-green-400">
        start
      </v-btn>
      <v-btn @click="reverse" class="cursor-pointer border border-green-400">
        reverse
      </v-btn>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import gsap from 'gsap';
  import Bar from './Bar.vue';

  const firstNumber = ref(null);
  const secondNumber = ref(null);
  const bar = ref(null);

  const animate = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

    tl.to([firstNumber.value, secondNumber.value], {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    }).to(
      bar.value.line,
      {
        scaleY: 1, // extend to full height
        transformOrigin: 'center bottom',
      },
      0, // start at the same time as numbers
    );
  };

  const reverse = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.9 } });
    tl.to(firstNumber.value, {
      x: -4,
      opacity: 0,
    })
      .to(
        secondNumber.value,
        {
          x: 4,
          opacity: 0,
        },
        0,
      )
      .to(
        bar.value.line,
        {
          scaleY: 0.4, // shrink bar height
          transformOrigin: 'center bottom',
        },
        0, // also start at the same time
      );
  };
</script>
