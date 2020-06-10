<template>
  <div>
    <router-view></router-view>
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
</style>
