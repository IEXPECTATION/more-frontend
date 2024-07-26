import { createRouter, createWebHistory } from 'vue-router'
import WorkSpace from '../views/WorkSpace.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WorkSpace
    },
  ]
})

export default router
