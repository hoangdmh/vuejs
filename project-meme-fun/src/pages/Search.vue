<template>
  <div class="search-page mt-4">
    <div class="search-info">
      <p>
        Từ khóa tìm kiếm:
        <strong>{{query}}</strong>
      </p>
      <p>
        Tìn kiếm được
        <strong>({{listPostSearch.length}})</strong> kết quả
      </p>
    </div>
    <div
      v-if="listPostSearch && listPostSearch.length"
      v-masonry
      column-width=".grid-sizer"
      transition-duration="0.3s"
      item-selector=".ass1-section__item"
      class="ass1-section__wrap row ass1-section__isotope-init mt-4"
    >
      <div class="grid-sizer"></div>

      <post-item
        v-masonry-tile
        v-for="item in listPostSearch"
        v-bind:key="item.PID"
        v-bind:post="item"
        class="col-lg-6"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostItem from "../components/PostItem";
export default {
  name: "search",
  components: {
    PostItem
  },
  data() {
    return {
      query: this.$route.query.query,
      listPostSearch: []
    };
  },
  watch: {
    $route(to, from) {
      this.query = to.query.query;
      this.checkQuery();
      this.fetchDataSearch();
    }
  },
  created() {
    this.checkQuery();
    this.fetchDataSearch();
  },
  methods: {
    ...mapActions(["getListPostSearch"]),
    checkQuery() {
      if (!this.query) {
        this.$router.push("/");
      }
    },
    fetchDataSearch() {
      if (this.query) {
        this.getListPostSearch(this.query).then(res => {
          if (res.ok) {
            this.listPostSearch = res.posts;
            //data change
            this.$redrawVueMasonry();
          }
        });
      }
    }
  }
};
</script>

<style>
</style>
