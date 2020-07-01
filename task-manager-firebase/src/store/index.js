import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import database from '../config/firebase';
import { STATUS_CONFIG } from '../config/const';
import { auth } from '../config/firebase';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentUser: {
      email: '',
      uid: ''
    },
    listTasks: {},
    isLoading: false
  },
  getters: {
    isLogin: state => {
      if (state.currentUser.email !== '' && state.currentUser.uid !== '') {
        return true
      }
      return false
    },
    getListTaskFilter: state => {
      const listTasks = state.listTasks;
      let todo = [], inProgress = [], toVerify = [], done = [];
      for (let key in listTasks) {
        let value = listTasks[key];
        let data = {
          id: key,
          ...value
        };

        //console.log('value.status', value.objData.status);
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
    },
    async register({ commit }, { email, password }) {
      //console.log('register', email, password, repassword);
      commit('SET_LOADING', true);
      try {
        let result = await auth.createUserWithEmailAndPassword(email, password);
        console.log('result', result);
        let user = {
          email,
          uid: result.user.uid
        }
        commit('SET_CURRENT_USER', user);
        commit('SET_LOADING', false);
        return {
          ok: true,
          error: null
        }
      } catch (error) {
        commit('SET_LOADING', false);
        return {
          ok: false,
          error: error.message
        }
      }
    },
    async login({ commit }, { email, password }) {
      commit('SET_LOADING', true);
      try {
        let result = await auth.signInWithEmailAndPassword(email, password);
        console.log('result', result);
        let user = {
          email,
          uid: result.user.uid
        }
        commit('SET_CURRENT_USER', user);
        commit('SET_LOADING', false);
        return {
          ok: true,
          error: null
        }
      } catch (error) {
        commit('SET_LOADING', false);
        return {
          ok: false,
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
    },
    SET_CURRENT_USER: (state, user) => {
      state.currentUser = user
    }
  }
})


export default store;
