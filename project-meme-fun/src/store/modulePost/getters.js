export default {
  getListPost: state => {
    return state.listPosts
  },
  getListNavigation: state => {
    return state.categories
  },
  // Khai báo kiểu rootState
  getDataPostDetail(state, getters, rootState) {
    if (state.postListDetail) {
      var USERID = state.postListDetail.post.USERID;
      var user = rootState.moduleUser.users[USERID];
      var data = {
        post: {
          ...state.postListDetail.post,
          fullname: user.fullname,
          profilepicture: user.profilepicture
        },
        categories: {
          categories: state.postListDetail.categories
        }
      }
      // console.log('State', state);
      // console.log('getters', getters);
      //console.log('data ==> ', data);
      return data;
    }
  }
}
