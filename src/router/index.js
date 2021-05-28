import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/warehouse-details/:id',
    name: 'Details',
     component: () => import('../views/Details.vue')
  },
  {
    path: '/dump',
    name: 'Dump',
     component: () => import('../views/Dump.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
