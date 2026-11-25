<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Project from './Project.vue'
import { ListBulletIcon, ViewColumnsIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  items: {
    type: Array,
  },
  mode: {
    type: String,
    default: 'list',
    validator: (value) => ['list', 'slideshow'].includes(value)
  }
})

const currentMode = ref(props.mode)
const slider = ref(null)
const isPaused = ref(false)

// autoplay: avanza di una slide ogni 3s, torna all'inizio a fine corsa
let autoplay = null
onMounted(() => {
  autoplay = setInterval(() => {
    const el = slider.value
    if (currentMode.value !== 'slideshow' || isPaused.value || !el) return
    const slideWidth = el.firstElementChild?.offsetWidth ?? 0
    const end = el.scrollWidth - el.clientWidth
    if (el.scrollLeft >= end - 10) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: slideWidth, behavior: 'smooth' })
    }
  }, 3000)
})
onUnmounted(() => clearInterval(autoplay))
</script>

<template>
  <div class="w-full mt-8">
    <div class="flex justify-end space-x-3 mb-4">
      <a href="#" @click.prevent="currentMode = 'list'" title="Modalità lista">
        <ListBulletIcon class="w-6 h-6" :class="currentMode === 'list' ? 'opacity-100' : 'opacity-40 hover:opacity-70'" />
      </a>
      <a href="#" @click.prevent="currentMode = 'slideshow'" title="Modalità slideshow">
        <ViewColumnsIcon class="w-6 h-6" :class="currentMode === 'slideshow' ? 'opacity-100' : 'opacity-40 hover:opacity-70'" />
      </a>
    </div>

    <div v-if="currentMode === 'list'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <Project
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>

    <div
      v-else
      ref="slider"
      class="slider flex overflow-x-auto snap-x snap-mandatory w-full"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <Project
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="shrink-0 snap-start w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4"
      />
    </div>
  </div>
</template>

<style scoped>
/* niente scrollbar sotto lo slideshow */
.slider {
  scrollbar-width: none;
}
.slider::-webkit-scrollbar {
  display: none;
}
</style>
