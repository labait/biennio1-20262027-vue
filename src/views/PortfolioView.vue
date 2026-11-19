<script setup>
import { inject } from 'vue'
import ProjectsList from '../components/ProjectsList.vue'
const projects = inject('projects')
</script> 

<template>
  <h2 class="text-4xl font-bold mb-2">
    Portfolio
  </h2>
  <ProjectsList :items="projects" />
</template>