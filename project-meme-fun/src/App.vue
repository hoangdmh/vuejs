<template>
  <div id="app">
    <loading v-bind:class="{ show: isLoading }" />
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
import { mapState } from "vuex";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Loading from "./components/Loading";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    Loading
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
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
  },
  created() {
    //console.log("Store => ", this.$store);
    this.$store.dispatch("getListPostHasPaging", {});
  }
};
</script>

<style lang="scss">
</style>
