<template>
  <div>
    <user-page-infor v-bind:userInfor="userInfor" />
    <div
      v-if="listPostOfUser && listPostOfUser.length"
      v-masonry
      column-width=".grid-sizer"
      transition-duration="0.3s"
      item-selector=".ass1-section__item"
      class="ass1-section__wrap row ass1-section__isotope-init mt-4"
    >
      <div class="grid-sizer"></div>

      <post-item
        v-for="item in listPostOfUser"
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

import { mapActions } from "vuex";

export default {
  name: "user-page",
  data() {
    return {
      userid: this.$route.params.id,
      userInfor: null,
      listPostOfUser: []
    };
  },
  watch: {
    $route(to, from) {
      this.userid = to.params.id;
      this.fetchAllData();
    }
  },
  components: {
    UserPageInfor,
    PostItem
  },
  methods: {
    ...mapActions(["getUserById", "getListPostByUserId", "setLoading"]),
    async fetchAllData() {
      this.setLoading(true);
      let userid = this.userid;

      let promiseUser = this.getUserById(userid);
      let promiseUserPost = this.getListPostByUserId(userid);
      let [resultUser, resultPostUser] = await Promise.all([
        promiseUser,
        promiseUserPost
      ]);
      this.setLoading(false);
      if (resultUser.ok && resultPostUser.ok) {
        this.userInfor = resultUser.data;
        this.listPostOfUser = resultPostUser.posts.posts;
      } else {
        this.$router.push("/");
      }

      console.log("resultUser", resultUser);
      console.log("resultPostUser", resultPostUser);
    }
  },
  // Khi load lai trang
  created() {
    this.fetchAllData();
  }
};
</script>

<style>
</style>
