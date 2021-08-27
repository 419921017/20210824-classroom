import loadable from '@/util/loadable';

const permissionList = [
  {
    path: '/lesson',
    name: 'lesson',
    component: loadable(() => import('@/views/lesson')),
    meta: {
      // 必须要登陆
      needLogin: true,
    },
  },
];
export default permissionList;
