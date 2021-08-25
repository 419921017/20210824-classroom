import * as Types from '@/store/action-types';

const mutations = {
  [Types.SET_CATEGORY](state, payload) {
    state.category = payload;
  },
};

export default mutations;
