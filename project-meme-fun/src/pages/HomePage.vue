<template>
  <div class="row">
    <div class="col-lg-8">
      <post-list />
    </div>
    <div class="col-lg-4">
      <sidebar />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
export default {
  name: "home-page",
  components: {
    PostList,
    Sidebar
  }
};
</script>

<style>
</style>
