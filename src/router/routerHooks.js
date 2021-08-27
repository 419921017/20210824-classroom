import store from '@/store';
import * as Types from '@/store/action-types';

export default {
  clearCancelToken: (to, from, next) => {
    // whitelist
    store.commit(Types.CLEAR_CANCEL_TOKEN);
    next();
  },
  loginPermission: async (to, from, next) => {
    let needLogin = to.matched.some((item) => item.meta.needLogin);
    if (!store.state.user.hasPermission) {
      // 每次跳转都要判断是否登陆
      let isLogin = await store.dispatch(`user/${Types.VALIDATE}`);
      if (needLogin) {
        !isLogin ? next('/login') : next();
      } else {
        if ((to.name = 'login')) {
          !isLogin ? next() : next('/profile');
        } else {
          next();
        }
      }
    } else {
      if ((to.name = 'login')) {
        !isLogin ? next() : next('/profile');
      } else {
        next();
      }
    }
  },
  menuPermission: async (to, from, next) => {
    if (store.state.user.hasPermission) {
      if (!store.state.user.menuPermission) {
        await store.dispatch(`user/${Types.ADD_ROUTE}`);
        // 组件加载是异步的, 要重新加载一次, 使用replace
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      next();
    }
  },
};
