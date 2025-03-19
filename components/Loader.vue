<template>
  <div
    ref="loader"
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black"
  >
    <div ref="loader_content" :class="load_Complete ? '' : 'animate-pulse'">
      <AnimationLogo
        ref="animationLogo"
      />
    </div>
  </div>
</template>

<script setup>
  import gsap from 'gsap'

  // Create references for the loader elements
  const loader = ref(null)
  const animationLogo = ref(null)
  const loader_content = ref(null)
  const load_Complete = ref(false)
  const emit = defineEmits(['loaded'])

  // Handle the page load
  const nuxtApp = useNuxtApp()

  nuxtApp.hook('app:suspense:resolve', () => {
    load_Complete.value = true
  })

  const exitLoader = () => {
    const tl = gsap.timeline()

    tl.fromTo(
      animationLogo.value.greenCircle,
      { strokeDasharray: '360', strokeDashoffset: '360' },
      {
        strokeDashoffset: '0',
        duration: 1.3,
        ease: 'power2.inOut',
        stroke: 'green',
      },
    )

    // Loader content animation
    tl.to(loader_content.value, {
      opacity: 0,
      duration: 0.5,
      x: -100,
    })

    // Loader exit animation
    tl.to(loader.value, {
      duration: 1,
      x: '-100%',
      ease: 'power4.inOut',
      onComplete: () => {
        emit('loaded') // Emit 'loaded' event
      },
    })
  }

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
            exitLoader()
          }
        },
      },
    )
  }

  onMounted(() => {
    startAnimations()
  })
</script>
