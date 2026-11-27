<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const year = new Date().getFullYear()

const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/amolinari', icon: faInstagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/magnum/', icon: faLinkedin },
  { name: 'X', url: 'https://x.com/antoniomolinari', icon: faXTwitter },
]
</script>

<template>
  <footer class="container mx-auto px-4 py-6 flex justify-between items-center">
    <p>&copy; {{ year }} Antonio Molinari</p>
    <ul class="flex space-x-4">
      <li v-for="social in socials" :key="social.name">
        <a :href="social.url" target="_blank" rel="noopener" :title="social.name" class="opacity-70 hover:opacity-100">
          <FontAwesomeIcon :icon="social.icon" class="text-2xl" />
        </a>
      </li>
    </ul>
  </footer>
</template>
