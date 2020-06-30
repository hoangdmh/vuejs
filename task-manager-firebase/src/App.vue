<template>
  <div id="app">
    <router-view></router-view>
    <loading v-bind:class="{ show: isLoading }" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "./components/Loading";
export default {
  name: "app",
  components: {
    Loading
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"])
  }
};
</script>

<style lang="scss">
</style>
