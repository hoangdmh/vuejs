<template>
  <div class="row">
    <div class="col-lg-8">
      <post-list v-if="getListPost.length" />
      <h2 v-else class="mt-5 pl-5">Không có bài viết nào</h2>
    </div>
    <div class="col-lg-4">
      <sidebar />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";

export default {
  name: "home-page",
  components: {
    PostList,
    Sidebar
  },
  methods: {
    ...mapActions(["getListPostHasPaging", "getListPostByCategory"])
  },
  computed: {
    ...mapGetters(["getListPost"])
  },
  watch: {
    $route(to, from) {
      var tagIndex = to.query.tagIndex;
      if (tagIndex) {
        this.getListPostByCategory({ tagIndex: tagIndex });
      } else {
        this.getListPostHasPaging({});
      }
    }
  }
};
</script>

<style>
</style>
