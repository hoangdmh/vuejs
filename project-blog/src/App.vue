<template>
  <div id="app">
    <navigation />
    <home-page />
    <comp-footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import CompFooter from "./components/CompFooter";
import HomePage from "./pages/HomePage";

export default {
  name: "app",
  components: {
    Navigation,
    CompFooter,
    HomePage
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
