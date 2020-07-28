import Vue from 'vue';
import Vuex from 'vuex';
import mutation from './mutations';
import actions from './actions';

Vue.use(Vuex);

const status = {
  userName: '',
  cartCount: 0,
};

export default new Vuex.Store({
  status,
  mutation,
  actions,
});
