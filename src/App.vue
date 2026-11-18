<script setup>
import Headline from './components/Headline.vue'
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center mx-auto container -border">
    <Headline class="mb-4" />
    <router-view />
  </main>
</template>

