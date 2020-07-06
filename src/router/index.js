import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../page/index.vue';
import Login from '../page/login.vue';
import Cart from '../page/cart.vue';
import HomeView from '../page/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    redirect: '/index',
    component: HomeView,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
      },
      {
        path: '/user',
        name: 'Login',
        component: Login,
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
