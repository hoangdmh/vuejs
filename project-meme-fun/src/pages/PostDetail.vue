<template>
  <div class="row">
    <div class="col-lg-8">
      <!--section-->
      <div class="ass1-section__list" v-if="getDataPostDetail && getDataPostDetail.post">
        <div class="ass1-section">
          <post-item v-bind:post="getDataPostDetail.post" />

          <post-feeling v-bind:tagDetail="getDataPostDetail.categories" />
        </div>
        <post-comment-add />
        <post-comments v-bind:comments="getDataPostDetail.comments.comments" />
      </div>
    </div>
    <div class="col-lg-4">
      <sidebar />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Sidebar from "../components/Sidebar";
import PostItem from "../components/PostItem";
import PostFeeling from "../components/PostFeeling";
import PostComments from "../components/PostComments";
import PostCommentAdd from "../components/PostCommentAdd";

export default {
  name: "post-detail",
  components: {
    Sidebar,
    PostItem,
    PostFeeling,
    PostComments,
    PostCommentAdd
  },
  data() {
    return {
      postId: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters(["getDataPostDetail"])
  },
  watch: {
    $route(to, from) {
      //console.log("to.params.id ", to);
      this.postId = to.params.id;
      this.fetchDataPostDetail();
    }
  },
  methods: {
    ...mapActions(["getPostDetailById"]),
    fetchDataPostDetail() {
      this.getPostDetailById(this.postId).then(res => {
        //console.log(res);
        if (!res.ok) {
          this.$router.push("/");
        }
      });
    }
  },
  created() {
    // load lai trang lan dau tien
    this.fetchDataPostDetail();
  }
};
</script>

<style>
</style>
