<template>
  <main>
    <section>
      <div ref="carouselCount" class="relative top-0 text-white"></div>
      <div class="carousel" aria-label="carousel of images">
        <div
          v-for="(_, index) in 8"
          :key="index"
          class="carousel-slide"
          ref="slideRefs"
        >
          <img :src="images[index]" alt="" />
          <h2>{{ titles[index] }}</h2>
          <h5>{{ subtitles[index] }}</h5>
        </div>
      </div>

      <nav class="carousel-nav" ref="carouselNav">
        <button
          class="prev"
          @click="changeSlide(-1)"
          tabindex="0"
          aria-label="Previous Slide"
        />
        <button
          class="next"
          @click="changeSlide(1)"
          tabindex="0"
          aria-label="Next Slide"
        />
      </nav>
    </section>
  </main>
</template>

<script setup>
  import gsap from 'gsap';
  import { useAppStore } from '@/stores/appStore';
  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);

  // Refs to DOM elements
  const slideRefs = ref([]);
  const carouselNav = ref(null);
  const currentIndex = ref(0);
  const carouselCount = ref(null);

  const totalSlides = 8; // Adjust if you add/remove slides

  // Change slide function
  function changeSlide(dir) {
    const slides = slideRefs.value;

    // Hide current
    gsap.to(slides[currentIndex.value], { opacity: 0, ease: 'power3' });

    // Move to next or previous
    currentIndex.value = gsap.utils.wrap(
      0,
      slides.length,
      currentIndex.value + dir,
    );

    // Show new
    gsap.to(slides[currentIndex.value], { opacity: 1, ease: 'power3.inOut' });

    // Update progress text
    appStore.carouselIndex = currentIndex.value + 1
  }

  onMounted(() => {
    const slides = slideRefs.value;
    // Set initial Carousel Index
    appStore.carouselIndex = currentIndex.value + 1

    // Prevent scroll snapping
    gsap.set('.carousel', { 'scroll-snap-type': 'none' });

    // Show nav
    gsap.set(carouselNav.value, { display: 'block' });

    // Apply styles and hide all except first
    slides.forEach((slide, i) => {
      slide.classList.add('carousel-slide-abs');
      gsap.set(slide, { opacity: i === 0 ? 1 : 0 });
    });
  });

  const images = [
    'https://images.unsplash.com/photo-1659733582156-d2a11801e59f?q=50&w=1600',
    'https://images.unsplash.com/photo-1543362137-5df0547b039d?q=50&w=1600',
    'https://images.unsplash.com/photo-1631142260228-305ccb610dba?q=50&w=1600',
    'https://images.unsplash.com/photo-1708022766976-49ca46c0f7de?q=50&w=1600',
    'https://images.unsplash.com/photo-1631142260079-970258649676?q=50&w=1600',
    'https://images.unsplash.com/photo-1708022809820-2668e65877b9?q=50&w=1600',
    'https://images.unsplash.com/photo-1708022796522-ff65b57439de?q=50&w=1600',
    'https://images.unsplash.com/photo-1708022790103-a514cb89a034?q=50&w=1600',
  ];

  const titles = [
    "We're No",
    'You Know',
    'Full commitment',
    "You Wouldn't",
    'I Just Wanna',
    'Gotta Make',
    'Never Gonna',
    'Never Gonna',
  ];

  const subtitles = [
    'Strangers to love',
    'The rules and so do I',
    "Is what I'm thinking of",
    'Get this from any other guy',
    "Tell you how I'm feeling",
    'You understand',
    'Give you up',
    'Let you down',
  ];
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    overflow: hidden;
  }

  .carousel {
    display: flex;
    gap: 10px;
    width: 100vw;
    height: 100vh;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-slide {
    display: flex;
    position: relative;
    flex: 0 0 75%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    scroll-snap-align: center;
    color: white;
  }

  .carousel-slide-abs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
  }

  .carousel-slide img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    position: relative;
    margin: 0;
    font-size: 1.8rem;
  }

  h5 {
    position: relative;
    margin: 2% 0 0 0;
    font-weight: 100;
    font-size: 1rem;
    letter-spacing: 0.3px;
  }

  .carousel-nav {
    display: none; /* displayed in the JS */
    position: absolute;
    width: 100%;
  }

  .carousel-nav button {
    position: absolute;
    cursor: pointer;
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg stroke='%23fff' fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 1 22 15'%3E%3Cpath d='M2,11 11,2 20,11'/%3E%3C/svg%3E");
    background-size: cover;
    background-color: transparent;
    aspect-ratio: 1.5;
    width: 7vw;
    min-width: 27px;
    max-width: 75px;
    height: auto;
    max-height: 3.7vh;
    overflow: visible;
    font-size: 3rem;
  }

  .prev {
    transform: translateY(-50%) rotate(-90deg);
  }

  .next {
    right: 0;
    transform: translateY(-50%) rotate(90deg);
  }

  .carousel-nav div {
    position: absolute;
    top: 36vh;
    opacity: 0.5;
    width: 100%;
    color: #fff;
    font-weight: 200;
    font-size: clamp(22px, 3.9vw, 44px);
    letter-spacing: 0.25rem;
    text-align: center;
  }

  /* Simplify the scroll bar appearance */
  ::-webkit-scrollbar {
    height: 13px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-top: 6px solid #000;
    background: #555;
    width: 50%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #bbb;
  }
</style>
