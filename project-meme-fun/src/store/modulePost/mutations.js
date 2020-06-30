export default {
  SET_LIST_POST(state, data) {
    state.listPosts = data;
  },
  PUSH_LIST_POST(state, data) {
    state.listPosts = [...state.listPosts, ...data];
  },
  POST_LIST_DETAIL(state, data) {
    state.postListDetail = data
  },
  PUSH_LIST_COMMENT(state, comment) {
    console.log('PUSH_LIST_COMMENT', comment);
    state.postListDetail.comments.push(comment)
  }
}
