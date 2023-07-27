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
      component: () => import("../detailviews/Paper.vue")
    },
    {
      path: '/project',
      name: 'project',
      component: () => import("../detailviews/Project.vue")
    },
    {
      path: '/detailcompetition',
      name: 'detailcompetition',
      component: () => import("../detailviews/Competition.vue")
    }

  ]
})

export default router
