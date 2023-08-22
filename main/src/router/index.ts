import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import subapp1 from '@/views/subapp1.vue'
import subapp2 from '@/views/subapp2.vue'
import test from '@/views/test.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/subapp1'
    },
    {
      path: '/subapp1',
      name: 'subapp1',
      component: subapp1
    },
    {
      path: '/subapp2',
      name: 'subapp2',
      component: subapp2
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})

export default router
