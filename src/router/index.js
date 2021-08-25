import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home';
import loadable from '@/util/loadable';
import routerHooks from './routerHooks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: loadable(() => import('@/views/lesson')),
  },
  {
    path: '/profile',
    name: 'profile',
    component: loadable(() => import('@/views/profile')),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Object.values(routerHooks).forEach((hook) => router.beforeEach(hook));

export default router;
