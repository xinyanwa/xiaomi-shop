// 引入模块
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {
  Icon, Carousel, Form, Input, Button,
  Select, Option, OptionGroup, Message
} from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './axios/index';
import mock from './mock/index';

// 引入全局样式
import './assets/css/reset.scss';
import './assets/css/config.scss';
import 'swiper/swiper-bundle.css';

Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  axios,
  mock,
  render: (h) => h(App),
}).$mount('#app');
