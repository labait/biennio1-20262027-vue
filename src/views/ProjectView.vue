<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projects = inject('projects')

const project = computed(() =>
  projects.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <article v-if="project" class="w-full max-w-2xl mt-8">
    <h2 class="text-3xl font-bold mb-4">{{ project.title }}</h2>
    <img :src="project.image" class="w-full object-cover rounded-xl mb-4" />
    <p class="text-lg">{{ project.description }}</p>
    <router-link to="/portfolio" class="inline-block mt-6 underline">&larr; Torna al portfolio</router-link>
  </article>
  <p v-else class="mt-8">Progetto non trovato.</p>
</template>
