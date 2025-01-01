<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class=" text-center">
    <i class="pi pi-exclamation-triangle text-yellow-400 text-9xl mt-10" ></i>
    <p class="text-9xl text-orange-700 font-extrabold">404</p>
    <h1 class="text-5xl font-extrabold  text-red-600 my-10">page not found !!!!</h1>
    <RouterLink to="/" class=" bg-orange-600 p-2 rounded-xl text-2xl font-bold text-gray-900"> Back to Home Page</RouterLink>
  </div>
</template>