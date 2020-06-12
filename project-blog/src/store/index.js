import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import listBlogs from "../mock/blogs";

const store = new Vuex.Store({
  state: {
    listBlogs,
    isLogin: false
  },
  mutations: {
    SET_LOGIN(state, isLogin = false) {
      state.isLogin = isLogin
    }
  },
  actions: {
    checkLogin({ commit }, { email, password }) {
      //console.log('Email - Pass => ', email, password);
      if (email === 'admin@gmail.com' && password === 'admin') {
        commit('SET_LOGIN', true);
        return true
      } else {
        commit('SET_LOGIN');
        return false
      }
    },
    checkLogout({ commit }) {
      commit('SET_LOGIN', false);
    }
  }
})

export default store
