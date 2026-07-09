<script setup>
import { onMounted } from 'vue';


onMounted(() => {

  if (window.__finishLoader) {

    window.__finishLoader();

  }

});
</script>


<template>

  <div class="main-app">

    <NuxtLoadingIndicator
      color="#38bdf8"
      :height="4"
    />


    <div class="content">

      <h1>
        App Loaded
      </h1>

      <p>
        Loader handed off cleanly.
      </p>

    </div>


  </div>

</template>


<style>

html,
body {

  margin:0;
  background:#0f172a;
  color:white;
  font-family:
    system-ui,
    sans-serif;

}


.main-app {

  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;

}


.content {

  text-align:center;

}

</style>