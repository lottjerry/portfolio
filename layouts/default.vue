<template>
  <div class="flex flex-col justify-between items-center bg-gray-500 h-dvh">
    <header class="w-full bg-black text-white flex justify-center">
      <Logo />
      <nav class="flex w-1/6 justify-around items-center">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-black text-white w-full flex justify-center">Footer</footer>
  </div>
</template>

<script setup></script>
