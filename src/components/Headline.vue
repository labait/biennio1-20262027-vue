<script setup>
import { ref } from 'vue'
import router from '../router';
const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About  ', path: '/about' }
])
</script>

<template>
  <a id="first" class="text-[12vw] font-bold mb-4" href="/">
    hello World!
  </a>
  <ul id="menu" class="flex flex-row space-x-4 mb-4">
    <li v-for="item in menuItems" :key="item.name">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>

</template>


<style scoped>
</style>