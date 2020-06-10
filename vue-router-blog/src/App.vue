<template>
  <div id="app">
    <comp-menu />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
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
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
</style>
