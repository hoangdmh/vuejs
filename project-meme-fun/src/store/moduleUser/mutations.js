import Vue from 'vue'
export default {
  SET_USER_INFO(state, user) {
    //console.log(state, user);
    Vue.set(state.users, user.USERID, user)
  },
  SET_LOGIN_INFO(state, { user = null, token = '' }) {
    localStorage.setItem('ACCESS_TOKEN', token)
    state.ACCESS_TOKEN = token,
      state.currentUser = user
  },
}
