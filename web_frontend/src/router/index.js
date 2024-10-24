import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/start',
  component: () => import('../views/StartView.vue')
},{
  path: '/test',
  component: () => import('../views/TestView.vue')
},{
  path: '/home',
  component: () => import('../views/HomeView.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
