import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


const store = new Vuex.Store({
  // state: state,
  // getters: getters,
  // mutations: mutations,
  // actions: actions
  state,
  getters,
  mutations,
  actions
});

export default store;