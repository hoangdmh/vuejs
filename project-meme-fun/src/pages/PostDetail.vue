<template>
  <div class="row">
    <div class="col-lg-8">
      <!--section-->
      <div class="ass1-section__list">
        <div class="ass1-section">
          <post-item />

          <post-feeling />
        </div>
        <post-comment-add />
        <post-comments />
      </div>
    </div>
    <div class="col-lg-4">
      <sidebar />
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
</style>
