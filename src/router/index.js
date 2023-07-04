import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import introPage from "../views/Pages/introPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/:name',
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
