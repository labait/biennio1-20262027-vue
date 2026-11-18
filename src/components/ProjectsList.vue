<script setup>
import Project from './Project.vue'

defineProps({
  items: {
    type: Array,
  }
})
</script>

<template>  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full  ">
    <Project 
      v-for="item in items" 
      :key="item.id" 
      :item="item" 
      class="-border border-red-500 "
    />
  </div>  
</template>