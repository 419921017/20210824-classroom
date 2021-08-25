import { fetchSlides } from '@/api/home';
import * as Types from '@/store/action-types';

const actions = {
  async [Types.SET_SLIDES]({ commit }) {
    let slides = await fetchSlides();
    commit(Types.SET_SLIDES, slides);
  },
};

export default actions;
