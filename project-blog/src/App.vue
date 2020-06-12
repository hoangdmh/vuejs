<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <comp-footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import CompFooter from "./components/CompFooter";

export default {
  name: "app",
  components: {
    Navigation,
    CompFooter
  },
  data() {
    return {};
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
