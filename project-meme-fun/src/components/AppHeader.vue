<template>
  <header>
    <div class="ass1-header">
      <div class="container">
        <router-link to="/" class="ass1-logo">Meme Fun</router-link>
        <app-navigation />
        <app-header-search />
        <router-link to="/upload" class="ass1-header__btn-upload ass1-btn">
          <i class="icon-Upvote"></i> Upload
        </router-link>
        <!-- if not login -->
        <router-link v-if="!isLogin" to="/login" class="ass1-header__btn-upload ass1-btn">Login</router-link>
        <!-- if already login -->
        <div class="user-login" v-else>
          <a href="/" class="user-avatar">
            <span class="avatar">
              <img v-bind:src="getAvatar" alt="avatar" />
            </span>
            <span class="email">{{currentUser.email}}</span>
          </a>
          <div v-on:click="handleLogout" class="ass1-header__btn-upload ass1-btn ml-1 logout">Logout</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
import AppNavigation from "./AppNavigation";
import AppHeaderSearch from "./AppHeaderSearch";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "app-header",
  components: {
    AppNavigation,
    AppHeaderSearch
  },
  computed: {
    ...mapGetters(["isLogin", "currentUser"]),
    getAvatar() {
      if (this.currentUser.profilepicture) {
        return this.currentUser.profilepicture;
      } else {
        return "/dist/images/default-avatar.jpg";
      }
    }
  },
  mounted() {
    $(".ass1-header__menu li > a").click(function(e) {
      // $(".ass1-header__nav").hide();
      $(this)
        .parent()
        .find(".ass1-header__nav")
        .slideToggle(300, "swing");
    });
    $(".ass1-header__nav ul li > a").click(function(e) {
      $(this)
        .parents(".ass1-header__nav")
        .slideUp(300, "swing");
    });
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.user-login {
  display: flex;
  align-items: center;
}
.avatar {
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
  }
}
.user-avatar {
  position: relative;
  .logout {
    position: absolute;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
}
.user-avatar {
  &:hover {
    .logout {
      opacity: 1;
      visibility: initial;
    }
  }
}
</style>>
