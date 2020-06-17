import axiosInstance from '../../plugins/axios'

export default {
  async getListPostHasPaging({ commit }, { pagesize, currPage }) {
    try {
      var result = await axiosInstance.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
      console.log('Result => ', result);
    } catch (error) {
      console.log('error');
    }
  }
}
