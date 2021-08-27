import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import directives from './util/directives';

import 'lib-flexible';
import 'normalize.css/normalize.css';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Object.entries(directives).forEach(([id, define]) => {
  Vue.directive(id, define);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
