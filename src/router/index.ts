import { createRouter, createWebHashHistory, createWebHistory, Router } from 'vue-router'
import Layout from '@/layout/index.vue'
import { RouterTy } from '~/router'
import store from '@/store'

import nestedRouter from './modules/nested'

export const constantRoutes: RouterTy = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    name: 'Table',
    children: [
      {
        path: '',
        component: () => import('@/views/table/index.vue'),
        name: 'TableIndex',
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },
  {
    path: '/world-map',
    component: Layout,
    name: 'WorldMap',
    children: [
      {
        path: '',
        component: () => import('@/views/world-map/index.vue'),
        name: 'WorldMapIndex',
        meta: { title: 'World Map', icon: 'international' }
      }
    ]
  },
  nestedRouter,
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const makeRouter = () => createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

const router: Router = makeRouter()

export default router
