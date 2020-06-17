import Vue from 'vue'
import Vuex from 'vuex'

import modulePost from './modulePost';
import moduleUser from './moduleUser';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0
  },
  modules: {
    modulePost,
    moduleUser
  }
})


export default store;
