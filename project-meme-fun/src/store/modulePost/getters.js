export default {
  getListPost: state => {
    return state.listPosts
  },
  getListNavigation: state => {
    return state.categories
  },
  getDataPostDetail: state => {
    return state.postListDetail
  }
}
