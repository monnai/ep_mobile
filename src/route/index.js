import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../page/Test')
    },
    {
      path: '/xxx',
      name: 'xxx',
      component: () => import('../page/Test1')
    },
    {
      path: '/',
      component: () => import('../App')
    }
  ]
})

export default router
