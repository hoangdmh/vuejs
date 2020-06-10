<template>
  <div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <slider />
  </div>
</template>

<script>
import Slider from "../components/Slider";

export default {
  name: "home-page",
  components: {
    Slider
  }
};
</script>

<style>
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
