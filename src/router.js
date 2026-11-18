import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import AboutView from './views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
