import axiosInstance from '../../plugins/axios'
import { PAGE_SIZE, CURRENT_PAGE } from '../../constants';


export default {
  async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
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

      //console.log('Result => ', result);
      if (result.data.status === 200) {
        if (currPage === 1) commit('SET_LIST_POST', result.data.posts)
        else if (currPage >= 1) commit('PUSH_LIST_POST', result.data.posts)
      }
    } catch (error) {
      console.log('error');
    }
  },
  async getPostDetailById({ commit, dispatch }, postId) {
    //console.log('Action getPostDetailById run');
    commit('SET_LOADING', true);
    //console.log('PostId', postId);
    try {
      var result = await axiosInstance.get('/post/post.php?postid=' + postId);


      if (result.data.status === 200) {
        //console.log('Goi API Post detail thanh cong');
        // Goi tiep API User
        var resultUser = await dispatch('getUserById', result.data.data.post.USERID);
        //console.log('resultUser => ', resultUser);
        commit('SET_LOADING', false);
        commit('POST_LIST_DETAIL', result.data.data);
        return {
          ok: true,
          data: result.data.data,
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
  async getListPostSearch({ commit }, searchSrt) {
    commit('SET_LOADING', true);
    try {
      var result = await axiosInstance.get('/post/search.php?query=' + searchSrt);
      commit('SET_LOADING', false);

      if (result.data.status === 200) {
        return {
          ok: true,
          posts: result.data.posts,
          error: null
        }
      } else {
        return {
          ok: false
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
