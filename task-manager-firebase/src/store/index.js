import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import database from '../config/firebase';
import { STATUS_CONFIG } from '../config/const';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    listTasks: {},
    isLoading: false
  },
  getters: {
    getListTaskFilter: state => {
      const listTasks = state.listTasks;
      let todo = [], inProgress = [], toVerify = [], done = [];
      for (let key in listTasks) {
        let value = listTasks[key];
        let data = {
          id: key,
          ...value
        };

        console.log('value.status', value.objData.status);
        if (value.objData.status === STATUS_CONFIG.TODO.value) {
          todo.push(data)
        } else if (value.objData.status === STATUS_CONFIG.IN_PROGRESS.value) {
          inProgress.push(data)
        } else if (value.objData.status === STATUS_CONFIG.TO_VERIFY.value) {
          toVerify.push(data)
        } else if (value.objData.status === STATUS_CONFIG.DONE.value) {
          done.push(data)
        }
      }
      return { todo, inProgress, toVerify, done }
    }
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
    },
    SET_LIST_TASKS: (state, data) => {
      state.listTasks = data
    }
  }
})


export default store;
