import * as Types from '@/store/action-types';

const mutations = {
  [Types.SET_USER](state, payload) {
    state.token = payload.token;
    state.username = payload.username;
    state.authList = payload.authList;
    if (payload.token) {
      localStorage.setItem('token', pageYOffset.token);
    }
  },
  [Types.SET_PERMISSION](state, payload) {
    state.hasPermission = payload;
  },
  [Types.SET_MENU_PERMISSION](state, payload) {
    state.hasPermission = payload;
  },
  [Types.SET_MENU_PERMISSION](state, payload) {
    state.menuPermission = payload;
  },
  [Types.ADD_ROUTE](state, payload) {
    state.routerList = payload;
  },
};

export default mutations;
