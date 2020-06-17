<template>
  <div class="ass1-section__item">
    <div class="ass1-section" v-if="post">
      <post-item-header v-bind:post="post" />

      <post-item-content v-bind:post="post" />

      <post-item-footer v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import PostItemContent from "./PostItemContent";

export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  components: {
    PostItemHeader,
    PostItemContent,
    PostItemFooter
  }
};
</script>

<style>
</style>
