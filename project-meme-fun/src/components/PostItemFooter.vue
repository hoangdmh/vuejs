<template>
  <div class="ass1-section__footer">
    <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
      <i class="icon-Comment_Full"></i>
      <span>{{commentCount}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "post-item-footer",
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    commentCount() {
      if (this.post.count) return this.post.count;
      return 0;
    }
  }
};
</script>

<style>
</style>
