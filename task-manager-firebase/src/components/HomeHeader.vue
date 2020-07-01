<template>
  <header>
    <div class="container">
      <ul>
        <li>
          <router-link to="/">Trang Chủ</router-link>
        </li>
        <li>
          <router-link to="/create">Dự án</router-link>
        </li>
      </ul>
      <ul class="right">
        <li v-if="currentUser.email">
          Đăng nhập với:
          <router-link class="user" to="/">{{currentUser.email}}</router-link>
        </li>
        <li>
          <a v-on:click.prevent="handleLogout" href="/">Đăng xuất</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "../config/firebase";
export default {
  name: "home-header",
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    handleLogout() {
      auth.signOut();
    }
  }
};
</script>

<style>
.user {
  color: #fff;
}
</style>
