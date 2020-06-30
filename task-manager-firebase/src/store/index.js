import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import database from '../config/firebase';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLoading: false
  },
  actions: {
    setLoading({ commit }, loading = false) {
      commit('SET_LOADING', loading)
    },
    async createTask({ commit }, objData) {
      let taskId = uuidv4();
      commit('SET_LOADING', true)
      try {
        await database.ref('tasks/' + taskId).set({ objData });
        commit('SET_LOADING', false)
        return {
          ok: true,
          error: null
        }
      } catch (error) {
        commit('SET_LOADING', false)
        return {
          error: error.message
        }
      }
    }
  },
  mutations: {
    SET_LOADING: (state, loading = false) => {
      state.isLoading = loading
    }
  }
})


export default store;
