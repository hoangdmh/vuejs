<template>
  <div class="ass1-section__list">
    <post-item v-for="item in getListPost" v-bind:key="item.PID" v-bind:post="item" />
    <button
      v-on:click="handleLoadMore"
      v-if="getListPost && getListPost.length"
      class="load-more ass1-btn"
    >
      <span>Xem thêm</span>
    </button>
    <h2 v-else class="mt-5 pl-5">Không có bài viết nào</h2>
  </div>
</template>

<script>
import PostItem from "./PostItem";
import { mapGetters, mapActions } from "vuex";
import { PAGE_SIZE, CURRENT_PAGE } from "../constants";
//import store from "../store";

export default {
  name: "post-list",
  data() {
    return {
      pagesize: PAGE_SIZE,
      currPage: CURRENT_PAGE,
      tagIndex: parseInt(this.$route.query.tagIndex)
    };
  },
  components: {
    PostItem
  },
  computed: {
    ...mapGetters(["getListPost"])
  },
  watch: {
    $route(to, from) {
      this.tagIndex = to.query.tagIndex;
      this.currPage = 1;
    }
  },
  methods: {
    ...mapActions(["getListPostHasPaging"]),
    handleLoadMore() {
      // tang current page len 1
      this.currPage += 1;
      let obj = {
        pagesize: this.pagesize,
        currPage: this.currPage,
        tagIndex: this.tagIndex
      };
      //this.getListPostHasPaging(obj);
      //store.dispatch("getListPostHasPaging", obj);
      this.$store.dispatch("getListPostHasPaging", obj);
    }
  }
};
</script>

<style>
</style>
