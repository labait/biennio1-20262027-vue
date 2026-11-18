<script setup>
import ProjectsList from '../components/ProjectsList.vue'

const projects = [
  { id: 1, favourite: true, title: 'Project 1', image: 'https://picsum.photos/800/600?v=1' },
  { id: 2, favourite: false, title: 'Project 2', image: 'https://picsum.photos/800/600?v=2' },
  { id: 3, favourite: true,  title: 'Project 3', image: 'https://picsum.photos/800/600?v=3' },
  
] 
</script> 



<template>
  <ProjectsList :items="projects" />
</template>