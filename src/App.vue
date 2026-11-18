<script setup>
import { ref, provide } from 'vue'
import Headline from './components/Headline.vue'

const projects = [
  { id: 1, favourite: true, title: 'Project 1', image: 'https://picsum.photos/800/600?v=1' },
  { id: 2, favourite: false, title: 'Project 2', image: 'https://picsum.photos/800/600?v=2' },
  { id: 3, favourite: true,  title: 'Project 3', image: 'https://picsum.photos/800/600?v=3' },
  
] 
provide('projects', projects)
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center mx-auto container -border">
    <Headline class="mb-4" />
    <router-view />
  </main>
</template>

