import axiosInstance from '../../plugins/axios'

export default {
  async getUserById({ commit }, userId) {
    console.log('Action getUserById Run');
    commit('SET_LOADING', true);
    try {
      var result = await axiosInstance.get('/member/member.php?userid=' + userId);

      commit('SET_LOADING', false);
      if (result.data.status === 200) {
        console.log('Result getUserById = ', result);
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
  }
}
