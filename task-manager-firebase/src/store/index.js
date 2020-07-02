import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import { STATUS_CONFIG } from '../config/const';
import { auth, userRef, database, taskRef } from '../config/firebase';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentUser: {
      email: '',
      uid: ''
    },
    listTasks: {},
    listUser: {},
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
    },
    getListEmailUser: state => {
      let listUser = state.listUser
      let arrEmail = [];
      for (let key in listUser) {
        let value = listUser[key];
        arrEmail.push(value.email)
      }
      return arrEmail;
    }
  },
  actions: {
    setLoading({ commit }, loading = false) {
      commit('SET_LOADING', loading)
    },
    onListenerUser({ commit }) {
      userRef.on('value', function (snapshot) {
        commit('SET_LIST_USERS', snapshot.toJSON())
      })
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
        await userRef.child(result.user.uid).set({
          email: email,
          role: 'member'
        });
        //console.log('result', result);
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
        //console.log('result', result);
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
    async getTaskById({ commit }, id) {
      commit('SET_LOADING', true);
      try {
        let result = await taskRef.child(id).once('value');
        commit('SET_LOADING', false);
        console.log('result', result.val());
        if (result.val()) {
          return {
            ok: true,
            task: result.val()
          }
        }
        return {
          ok: false,
          task: null,
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
    },
    SET_LIST_USERS: (state, data) => {
      state.listUser = data
    }
  }
})


export default store;
