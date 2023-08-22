import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'

export const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '主页',
      icon: 'home',
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/AboutView.vue'),
    meta: {
      title: '关于',
      icon: 'setting',
    },
    children: [
      {
        path: '/about/hello',
        name: 'hello',
        component: () => import('@/views/About/Page1.vue'),
        meta: {
          title: '你好',
          icon: 'setting',
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
