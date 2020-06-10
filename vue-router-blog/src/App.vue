<template>
  <div id="app">
    <comp-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import CompMenu from "./components/CompMenu";
import Slider from "./components/Slider";

export default {
  name: "app",
  components: {
    CompMenu
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
