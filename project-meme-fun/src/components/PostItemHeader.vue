<template>
  <div class="ass1-section__head">
    <router-link v-bind:to="`/user/${post.USERID}`" class="ass1-section__avatar ass1-avatar">
      <img v-bind:src="getAvatar" alt />
    </router-link>
    <div>
      <router-link
        v-bind:to="`/user/${post.USERID}`"
        class="ass1-section__name"
        v-html="formatFullName"
      ></router-link>
      <span class="ass1-section__passed">{{formatTime}}</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { replaceAll } from "../helpers";
export default {
  name: "post-item-header",
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
    },
    formatFullName() {
      if (this.querySearch) {
        return replaceAll(
          this.post.fullname,
          this.querySearch,
          `<mark>${this.querySearch}</mark>`
        );
      } else {
        return this.post.fullname;
      }
    }
  }
};
</script>

<style>
.ass1-section__name {
  text-transform: capitalize;
}
</style>
