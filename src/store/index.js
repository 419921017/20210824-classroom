import Vue from 'vue';
import Vuex from 'vuex';
import * as Types from '@/store/action-types';

import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cancelTokens: [],
  },
  mutations: {
    [Types.SET_CANCEL_TOKEN](state, token) {
      state.cancelTokens = [...state.cancelTokens, token];
    },
    [Types.CLEAR_CANCEL_TOKEN](state) {
      // 执行取消方法
      state.cancelTokens.forEach((token) => token());
      // 清空取消方法的队列
      state.cancelTokens = [];
    },
  },
  actions: {},
  modules: {
    ...modules,
  },
});

window.store = store;
console.log('store', store);

export default store;
