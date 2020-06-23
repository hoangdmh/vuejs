<template>
  <div>
    <user-page-infor />
    <div
      v-if="getListPostOfCurrentUser && getListPostOfCurrentUser.length"
      v-masonry
      column-width=".grid-sizer"
      transition-duration="0.3s"
      item-selector=".ass1-section__item"
      class="ass1-section__wrap row ass1-section__isotope-init mt-4"
    >
      <div class="grid-sizer"></div>

      <post-item
        v-for="item in getListPostOfCurrentUser"
        v-bind:key="item.PID"
        v-bind:post="item"
        class="col-lg-6"
      />
    </div>
  </div>
</template>

<script>
import UserPageInfor from "../components/UserPageInfor";
import PostItem from "../components/PostItem";

import { mapGetters } from "vuex";

export default {
  name: "user-page",
  components: {
    UserPageInfor,
    PostItem
  },
  computed: {
    ...mapGetters(["getListPostOfCurrentUser"])
  }
};
</script>

<style>
</style>
