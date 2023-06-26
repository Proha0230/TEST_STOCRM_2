import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
