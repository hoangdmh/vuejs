<template>
  <!--comment-->
  <div class="ass1-comments__section" v-if="comment">
    <a href="#" class="ass1-comments__avatar ass1-avatar">
      <img v-bind:src="getAvatar" alt />
    </a>
    <div class="ass1-comments__content">
      <a href="#" class="ass1-comments__name">{{comment.fullname}}</a>
      <span class="ass1-comments__passed">{{formatTime}}</span>
      <p>{{comment.comment}}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "post-comment-item",
  props: {
    comment: {
      type: Object,
      default: {}
    }
  },
  computed: {
    formatTime() {
      moment.locale("vi");
      return moment(this.comment.time_added).fromNow();
    },
    getAvatar() {
      if (this.comment && this.comment.profilepicture) {
        return this.comment.profilepicture;
      } else {
        return "/dist/images/default-avatar.jpg";
      }
    }
  }
};
</script>

<style>
</style>
