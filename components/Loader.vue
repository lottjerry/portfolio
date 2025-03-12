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

// Create references for the loader elements
const loader = ref(null);
const loader_content = ref(null);
const emit = defineEmits(['loaded']);

// Handle the page load
const nuxtApp = useNuxtApp();

// Ensure the loader is visible when the app is loading
nuxtApp.hook('app:suspense:resolve', () => {
	// Loader animation sequence after the page has finished rendering
	gsap.to(loader_content.value, {
		opacity: 0,
		duration: 1,
		x: -100,
		delay: 1, // Delayed after page finish
	});

	gsap.to(loader.value, {
		duration: 1,
		x: '-100%',
		ease: 'power4.out',
		delay: 1.3, // Slight delay after content animation
		onComplete: () => {
			emit('loaded'); // Emit 'loaded' event to let the parent know it’s done
		},
	});
});
</script>
