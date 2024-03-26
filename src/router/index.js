import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import introPage from "../views/Pages/introPage.vue"
import PublicationsView from '@/views/PublicationsView.vue'

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView,
  },
  {
    path: '/publications',
    name: 'publications-view',
    component: PublicationsView,
  },
  {
    path: '/work',
    name: 'work-view',
    component: WorkView,
    children:[
      {
        path: ':name',
        component: introPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
