import store from '@/store';
import * as Types from '@/store/action-types';

export default {
  clearCancelToken: (to, from, next) => {
    // whitelist
    store.commit(Types.CLEAR_CANCEL_TOKEN);
    next();
  },
};
