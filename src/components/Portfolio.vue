<script setup>
import Project from './Project.vue'

const projects = [
  { id: 1, title: 'Project 1', image: 'https://picsum.photos/800/600?v=1' },
  { id: 2, title: 'Project 2', image: 'https://picsum.photos/800/600?v=2' },
  { id: 3, title: 'Project 3', image: 'https://picsum.photos/800/600?v=3' },
  
] 
</script> 



<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full  ">
    <Project 
      v-for="item in projects" 
      :key="item.id" 
      :item="item" 
      class="-border border-red-500 "
    />
    
  </div>  
</template>