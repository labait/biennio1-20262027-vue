<script setup>
import Headline from './components/Headline.vue'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center mx-auto container -border">
    <Headline class="mb-4" />
    <!-- <HomeView /> -->
    <PortfolioView /> 
  </main>
</template>

