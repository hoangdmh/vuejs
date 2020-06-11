<template>
  <div>
    <comp-header />
    <blog-list />
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader";
import BlogList from "../components/BlogList";
export default {
  name: "home-page",
  components: {
    CompHeader,
    BlogList
  }
};
</script>

<style>
</style>
