import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import listBlogs from "../mock/blogs";

const store = new Vuex.Store({
  state: {
    listBlogs
  }
})

export default store
