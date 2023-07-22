import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/paper',
      name: 'paper',
      component: () => import("../views/Paper.vue")
    },
    {
      path: '/product',
      name: 'project',
      component: () => import("../views/Project.vue")
    },
    {
      path: '/research',
      name: 'competition',
      component: () => import("../views/Competition.vue")
    },

  ]
})

export default router
