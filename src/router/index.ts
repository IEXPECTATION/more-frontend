import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import Login from '@/views/Login.vue'
import { useSoftwareMode } from '@/stores/software_mode';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage,
    },
    {
      path: '/login',
      name: "Login Page",
      component: Login,
    }
  ]
})

export default router
