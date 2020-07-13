<template>
  <div>
    <div class="post-preview">
      <router-link
        v-bind:to="{
        name: 'blog-detail',
        params: {
          id: blog.id,
          title: blog.title.split(' ').join('-').toLowerCase().replace('.', '')
        }
      }"
      >
        <h2 class="post-title">{{ blog.title }}</h2>
        <h3 class="post-subtitle">{{ blog.abstract }}</h3>
      </router-link>
      <p class="post-meta">
        Posted by
        <a href="#">{{ blog.fullName }}</a>
        <!-- {{ blog.create_at.getFullYear() + '/' + `${blog.create_at.getMonth() + 1}` + '/' + blog.create_at.getDate()}} -->
        {{`${blog.create_at.getFullYear()}/${blog.create_at.getMonth() + 1}/${blog.create_at.getDate()}`}}
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-item",
  props: {
    blog: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
