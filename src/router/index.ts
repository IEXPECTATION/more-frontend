import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home.vue'
import Login from '../views/login.vue'
import NotFound from '../views/404.vue'
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: "Not Found",
      component: NotFound,
    },
  ]
})

export default router
