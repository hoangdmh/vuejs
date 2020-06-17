import axiosInstance from '../../plugins/axios'

export default {
  async getListPostHasPaging({ commit }, { pagesize = 6, currPage = 1 }) {
    console.log('getListPostHasPaging');
    try {
      var result = await axiosInstance.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
      console.log('Result => ', result);
      if (result.data.status === 200) {
        commit('SET_LIST_POST', result.data.posts)
      }
    } catch (error) {
      console.log('error');
    }
  },
  async getListPostByCategory({ commit }, { pagesize = 6, currPage = 1, tagIndex = 1 }) {
    try {
      var config = {
        params: {
          pagesize,
          currPage,
          tagIndex
        }
      }
      var result = await axiosInstance.get('/post/getListByCategory.php', config);
      console.log('Result => ', result);
      if (result.data.status === 200) {
        commit('SET_LIST_POST', result.data.posts)
      }
    } catch (error) {
      console.log('error');
    }
  }
}
