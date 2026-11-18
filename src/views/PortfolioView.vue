<script setup>
import { inject } from 'vue'
import ProjectsList from '../components/ProjectsList.vue'
const projects = inject('projects')
</script> 



<template>
  <ProjectsList :items="projects" />
</template>