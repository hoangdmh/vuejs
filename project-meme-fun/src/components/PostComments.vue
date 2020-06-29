<template>
  <div class="ass1-comments">
    <div class="ass1-comments__head">
      <div class="ass1-comments__title">{{comments.length}} Bình luận</div>
    </div>
    <post-comments-item v-for="cmt in comments" v-bind:key="cmt.CID" v-bind:comment="cmt" />
  </div>
</template>

<script>
import PostCommentsItem from "./PostCommentsItem";
export default {
  name: "post-comments",
  components: {
    PostCommentsItem
  },
  props: {
    comments: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
</style>
