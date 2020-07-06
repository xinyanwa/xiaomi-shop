// 引入模块
import Vue from 'vue';
import { Icon, Carousel } from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './axios/index';
import mock from './mock/index';

// 引入全局样式
import './assets/css/reset.scss';
import './assets/css/config.scss';

Vue.config.productionTip = false;

Vue.use(Icon, Carousel);

new Vue({
  router,
  store,
  axios,
  mock,
  render: (h) => h(App),
}).$mount('#app');
