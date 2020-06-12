<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <blog-item v-for="(item) in listBlogs" v-bind:key="item.id" v-bind:blog="item" />
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BlogItem from "./BlogItem";

export default {
  name: "blog-list",
  components: {
    BlogItem
  },
  computed: {
    ...mapState(["listBlogs"])
  }
};
</script>

<style>
</style>
