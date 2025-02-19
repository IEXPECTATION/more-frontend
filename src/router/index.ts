import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home.vue'
import Authentication from '../views/authentication.vue'
import NotFound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/Auth',
      name: "Login Page",
      component: Authentication,
    },
    {
      path: '/:pathMatch(.*)*',
      name: "Not Found",
      component: NotFound,
    },
  ]
})

export default router
