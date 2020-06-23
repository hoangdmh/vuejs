import Vue from 'vue';
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
  SET_USER_INFO(state, user) {
    //console.log(state, user);
    Vue.set(state.users, user.USERID, user)
  },
  SET_LOGIN_INFO(state, { user = null, token = '' }) {
    localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
    state[CONFIG_ACCESS_TOKEN] = token;
    state.currentUser = user
  },
  SET_LOGOUT(state) {
    state[CONFIG_ACCESS_TOKEN] = '';
    state.currentUser = null;
    localStorage.removeItem(CONFIG_ACCESS_TOKEN);
  },
  SET_USER_POST(state, { posts, userid }) {
    Vue.set(state.posts, userid, posts)
  },
}
