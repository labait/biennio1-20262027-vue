<script setup>
import { ref, provide } from 'vue'
import Headline from './components/Headline.vue'

const projects = [
  { id: 1, favourite: true, title: 'Project 1', image: 'https://picsum.photos/800/600?v=1', description: 'Descrizione di test per il progetto 1: un sito vetrina realizzato con Vue e Tailwind.' },
  { id: 2, favourite: false, title: 'Project 2', image: 'https://picsum.photos/800/600?v=2', description: 'Descrizione di test per il progetto 2: una web app con routing e gestione dello stato.' },
  { id: 3, favourite: true,  title: 'Project 3', image: 'https://picsum.photos/800/600?v=3', description: 'Descrizione di test per il progetto 3: un esperimento di layout a griglia responsive.' },

]
provide('projects', projects)
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center mx-auto container -border mb-4">
    <Headline class="mb-8" />
    <router-view />
  </main>
</template>

