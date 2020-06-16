<template>
  <div id="app">
    <app-header v-if="isRenderHeader" />
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <app-footer v-if="isRenderFooter" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {};
  },
  computed: {
    isRenderHeader() {
      var arrRouter = ["login", "register"];
      var arrName = this.$route.name;
      if (arrRouter.indexOf(arrName) !== -1) return false;
      return true;
    },
    isRenderFooter() {
      var arrRouter = ["home-page", "post-detail"];
      var arrName = this.$route.name;
      if (arrRouter.indexOf(arrName) !== -1) return false;
      return true;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
