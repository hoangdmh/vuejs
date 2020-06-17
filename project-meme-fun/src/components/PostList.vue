<template>
  <div class="ass1-section__list">
    <post-item v-for="item in getListPost" v-bind:key="item.PID" v-bind:post="item" />
    <button v-if="getListPost && getListPost.length" class="load-more ass1-btn">
      <span>Xem thêm</span>
    </button>
  </div>
</template>

<script>
import PostItem from "./PostItem";
import { mapGetters } from "vuex";

export default {
  name: "post-list",
  components: {
    PostItem
  },
  computed: {
    ...mapGetters(["getListPost"])
  }
};
</script>

<style>
</style>
