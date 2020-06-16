<template>
  <div>
    <user-page-infor />
    <div class="ass1-section__wrap row ass1-section__isotope-init">
      <div class="grid-sizer"></div>
      <!-- <post-item /> -->
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
// import UserPageInfor from "../components/UserPageInfor";
export default {
  name: "user-page",
  components: {
    // UserPageInfor,
    PostItem
  }
};
</script>

<style>
</style>
