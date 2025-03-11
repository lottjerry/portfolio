<template>
	<div
		ref="loader"
		class="flex items-center justify-center bg-black inset-0 fixed z-[999]"
	>
		<h1 ref="loader_content" class="text-purple-600">Loading ...</h1>
	</div>
</template>

<script setup>
import gsap from 'gsap';

const loader = ref(null);
const loader_content = ref(null);
const emit = defineEmits(['loaded']);

onMounted(() => {
	gsap.to(loader_content.value, {
		opacity: 0,
		duration: 1,
		delay: 2,
		x: -100,
	});
	gsap.to(loader.value, {
		duration: 1,
		x: '-100%',
		ease: 'power4.out',
		delay: 2.3,
		onComplete: () => {
			emit('loaded');
		},
	});
});
</script>
