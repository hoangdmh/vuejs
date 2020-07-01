<template>
  <div class="side-bar">
    <div class="page-title">
      <span>Thành viên</span>
    </div>
    <ul class="list-members">
      <li v-for="(email, index) in getListEmailUser" v-bind:key="index">{{email}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "sidebar",
  computed: {
    ...mapGetters(["getListEmailUser"])
  }
};
</script>
