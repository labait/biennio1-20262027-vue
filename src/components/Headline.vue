<script setup>
import { ref } from 'vue'
const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About  ', path: '/about' }
])
</script>

<template>
  <router-link id="first" class="text-[12vw] font-bold mb-4" to="/">
    hello World!
  </router-link>
  <ul id="menu" class="flex flex-row space-x-4 mb-12">
    <li v-for="item in menuItems" :key="item.name">
      <router-link :to="item.path" class="text-2xl hover:underline">{{ item.name }}</router-link>
    </li>
  </ul>

</template>


<style scoped>
</style>