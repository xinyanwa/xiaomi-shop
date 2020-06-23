import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './axios/index';
import mock from './mock/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  mock,
  render: (h) => h(App),
}).$mount('#app');
