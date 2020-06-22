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
        <router-link to="/login" class="ass1-header__btn-upload ass1-btn">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
import AppNavigation from "./AppNavigation";
import AppHeaderSearch from "./AppHeaderSearch";

export default {
  name: "app-header",
  components: {
    AppNavigation,
    AppHeaderSearch
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
  }
};
</script>

<style>
</style>
