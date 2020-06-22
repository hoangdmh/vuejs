import axiosInstance from '../../plugins/axios'

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
  async login({ commit }, { email = '', password = '' }) {
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
        console.log('Result data => ', result.data);
        commit('SET_USER_INFO', result.data.user);
        commit('SET_LOGIN_INFO', result.data);

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
  }
}
