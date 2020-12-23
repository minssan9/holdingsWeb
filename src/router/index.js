import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// const Component = () => import('../views/VuejsAbout.vue')
import Component from '../views/VuejsAbout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuejs_about',
    name: 'vuejs_about',
    component: Component
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
