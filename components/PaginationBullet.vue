<template>
  <div class="flex items-center justify-center text-xs font-bold cursor-pointer">
    <p ref="firstNumber" class="-mx-1.5 -translate-x-4 self-start opacity-0">
      {{ current }}
    </p>
    <Bar ref="bar" />
    <p ref="secondNumber" class="-mx-1.5 translate-x-4 self-end opacity-0">
      {{ total }}
    </p>
  </div>
</template>

<script setup>
import gsap from 'gsap';

const props = defineProps({
  current: String,
  total: String,
  active: Boolean,
});

const firstNumber = ref(null);
const secondNumber = ref(null);
const bar = ref(null);

const animateIn = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });
  tl.to([firstNumber.value, secondNumber.value], {
    x: 0,
    opacity: 1,
    stagger: 0.1,
  }).to(
    bar.value.line,
    {
      scaleY: 1,
      transformOrigin: 'center bottom',
    },
    0
  );
};

const animateOut = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.9 } });
  tl.to(firstNumber.value, { x: -4, opacity: 0 })
    .to(secondNumber.value, { x: 4, opacity: 0 }, 0)
    .to(bar.value.line, { scaleY: 0.4, transformOrigin: 'center bottom' }, 0);
};

// Watch when bullet becomes active/inactive
watch(
  () => props.active,
  (isActive) => {
    if (isActive) animateIn();
    else animateOut();
  },
);
</script>
