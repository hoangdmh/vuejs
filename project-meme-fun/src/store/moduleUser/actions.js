import axiosInstance from '../../plugins/axios'
import { parseJwt } from '../../helpers/index';
import { CONFIG_ACCESS_TOKEN } from '../../constants';

export default {
  async getUserById({ commit }, userId) {
    //console.log('Action getUserById Run');
    commit('SET_LOADING', true);
    try {
      var result = await axiosInstance.get('/member/member.php?userid=' + userId);

      commit('SET_LOADING', false);
      if (result.data.status === 200) {
        //console.log('Result getUserById = ', result);
        commit('SET_USER_INFO', result.data.user);
        return {
          ok: true,
          data: result.data.user,
          error: null
        }
      }
    } catch (error) {
      commit('SET_LOADING', false);
      return {
        ok: false,
        error: error.message
      }
    }
  },
  async login({ commit, dispatch }, { email = '', password = '' }) {
    commit('SET_LOADING', true);
    try {
      let data = {
        email: email,
        password: password
      }
      var result = await axiosInstance.post('/member/login.php', data);

      //console.log('Result Login => ', result);
      commit('SET_LOADING', false);

      if (result.data.status === 200) {
        //console.log('Result data => ', result.data);
        commit('SET_USER_INFO', result.data.user);
        commit('SET_LOGIN_INFO', result.data);
        dispatch('getListPostByUserId', result.data.user.USERID)

        return {
          ok: true,
          data: result.data,
          error: null
        }

      } else {
        return {
          ok: false,
          error: result.data.error
        }
      }

    } catch (error) {
      commit('SET_LOADING', false);
      return {
        ok: false,
        error: error.message
      }
    }
  },
  async checkLogin({ commit, dispatch }) {
    try {
      let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN)
      let userObj = parseJwt(tokenLocal)

      // console.log('tokenLocal => ', userObj);

      if (userObj) {
        // let resultUser = await dispatch('getUserById', userObj.id);
        // let resultPostUser = await dispatch('getListPostByUserId', userObj.id)
        // console.log('resultUser => ', resultUser);

        let promiseUser = dispatch('getUserById', userObj.id);
        let promiseUserPost = dispatch('getListPostByUserId', userObj.id)

        let [resultUser, resultPostUser] = await Promise.all([promiseUser, promiseUserPost]);

        if (resultUser.ok && resultPostUser.ok) {
          let data = {
            user: resultUser.data,
            token: tokenLocal
          }
          commit('SET_LOGIN_INFO', data);
          return {
            ok: true,
            error: null
          }
        }
        return {
          ok: false
        }
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message
      }
    }
  },
  async logout({ commit }) {
    commit('SET_LOGOUT');
  },
  async getListPostByUserId({ commit }, userid) {
    try {
      let config = {
        params: {
          userid: userid
        },
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
        }
      }
      var result = await axiosInstance.get('/post/getListPostUserID.php', config);
      if (result.data.status === 200) {
        let objData = {
          posts: result.data.posts,
          userid: userid
        }
        commit('SET_USER_POST', objData);
        return {
          ok: true,
          posts: result.data || [],
          error: null
        }
      }
      return {
        ok: false,
        error: null
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message
      }
    }
  },
  async register({ commit, dispatch }, data) {
    commit('SET_LOADING', true);
    try {
      var result = await axiosInstance.post('/member/register.php', data);
      commit('SET_LOADING', false);
      //console.log('register =>', result.data);
      if (result.data.status === 200) {
        //console.log('register =>', result.data);
        let objLoginInfo = {
          user: result.data.user,
          token: result.data.token
        }

        commit('SET_USER_INFO', result.data.user);
        commit('SET_LOGIN_INFO', objLoginInfo);
        dispatch('getListPostByUserId', result.data.user.USERID);

        return {
          ok: true,
          error: null,
          data: result.data
        }
      } else {
        return {
          ok: false,
          error: result.data.error
        }
      }

    } catch (error) {
      commit('SET_LOADING', false);
      return {
        ok: false,
        error: error.message
      }
    }
  }
}
