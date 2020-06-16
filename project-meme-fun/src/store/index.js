import Vue from 'vue'
import Vuex from 'vuex'

import moduleEx from './moduleEx';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0
  },
  modules: {
    moduleEx
  }
})


export default store;
