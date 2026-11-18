import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import AboutView from './views/AboutView.vue'
import ProjectView from './views/ProjectView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/about', component: AboutView },
  { path: '/project/:id', component: ProjectView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
