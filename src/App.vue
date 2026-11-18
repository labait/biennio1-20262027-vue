<script setup>
import Headline from './components/Headline.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center mx-auto container -border">
    <Headline class="mb-4" />
    <About/>
    <Portfolio />
  </main>
</template>

