<script setup>
defineProps({
  item: Object
})
</script>

<template>
  <div class="overflow-hidden">
    <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
    <router-link :to="`/project/${item.id}`">
      <img :src="item.image" class="grayscale hover:grayscale-0 cursor-pointer w-full object-cover rounded-xl" />
    </router-link>
  </div>
</template>