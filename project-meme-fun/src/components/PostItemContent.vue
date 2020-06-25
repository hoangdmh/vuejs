<template>
  <div class="ass1-section__content">
    <p v-html="formatContent"></p>
    <div class="ass1-section__image">
      <router-link v-bind:to="`/post-detail/${post.PID}`">
        <img v-bind:src="post.url_image" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { replaceAll } from "../helpers";

export default {
  name: "post-item-content",
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      querySearch: this.$route.query.query
    };
  },
  watch: {
    $route(to, from) {
      this.querySearch = to.query.query;
    }
  },
  computed: {
    formatContent() {
      if (this.querySearch) {
        return replaceAll(
          this.post.post_content,
          this.querySearch,
          `<mark>${this.querySearch}</mark>`
        );
      } else {
        return this.post.post_content;
      }
    }
  }
};
</script>

<style>
</style>
