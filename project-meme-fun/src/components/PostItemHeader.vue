<template>
  <div class="ass1-section__head">
    <router-link v-bind:to="`/user/${post.USERID}`" class="ass1-section__avatar ass1-avatar">
      <img v-bind:src="getAvatar" alt />
    </router-link>
    <div>
      <router-link v-bind:to="`/user/${post.USERID}`" class="ass1-section__name">{{post.fullname}}</router-link>
      <span class="ass1-section__passed">{{formatTime}}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "post-item-header",
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    getAvatar() {
      if (this.post.profilepicture) {
        return this.post.profilepicture;
      } else {
        return "/dist/images/avatar-02.png";
      }
    },
    formatTime() {
      moment.locale("vi");
      return moment(this.post.time_added).fromNow();
    }
  }
};
</script>

<style>
</style>
