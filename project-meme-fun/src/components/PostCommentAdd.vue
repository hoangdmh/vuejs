<template>
  <div class="ass1-add-comment">
    <form action="#" v-on:submit.prevent="handleAddComment">
      <textarea
        v-model="comment"
        type="text"
        class="form-control ttg-border-none"
        placeholder="Thêm một bình luận"
      />
    </form>
    <div class="ass1-add-comment__content">
      <a
        href="#"
        v-on:click.prevent="handleAddComment"
        class="ass1-add-comment__btn-save ass1-btn-icon"
      >
        <span>{{maxLengCount}}</span>
        <i class="icon-Submit_Tick"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "post-comment-add",
  data() {
    return {
      comment: "",
      maxLength: 180,
      postId: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.postId = to.params.id;
    }
  },
  computed: {
    maxLengCount() {
      return this.maxLength - this.comment.length;
    }
  },
  methods: {
    ...mapActions(["postComment"]),
    handleAddComment() {
      if (this.comment.length && this.comment.length <= this.maxLength) {
        //call api post comment
        let data = {
          comment: this.comment,
          postid: this.postId
        };
        this.postComment(data).then(res => {
          if (res.ok) {
            alert("Binh luan thanh cong");
            this.comment = "";
          } else {
            alert(res.error);
          }
        });
      } else {
        alert("Noi dung nhap vao chưa dung");
      }
    }
  }
};
</script>

<style>
</style>
