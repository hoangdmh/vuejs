import axiosInstance from '../../plugins/axios'

export default {
  async getListPostHasPaging({ commit }, { pagesize = 6, currPage = 1, tagIndex = null }) {
    commit('SET_LOADING', true);
    try {
      var config = {
        params: {
          pagesize,
          currPage
        }
      }
      if (tagIndex) {
        config.params.tagIndex = tagIndex;
        var result = await axiosInstance.get('/post/getListByCategory.php', config);
      } else {
        var result = await axiosInstance.get('/post/getListPagination.php', config);
      }
      commit('SET_LOADING', false);
      console.log('Result => ', result);
      if (result.data.status === 200) {
        commit('SET_LIST_POST', result.data.posts)
      }
    } catch (error) {
      console.log('error');
    }
  }
}
