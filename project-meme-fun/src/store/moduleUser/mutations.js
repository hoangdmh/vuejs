import Vue from 'vue'
export default {
  SET_USER_INFO(state, user) {
    //console.log(state, user);
    Vue.set(state.users, user.USERID, user)
  }
}
