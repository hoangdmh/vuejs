<template>
  <b-container class="py-5">
    <h1 class="mb-4">List user</h1>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <!-- <b-list-group-item
            v-for="(user, index) in listUser"
            v-bind:key="index"
            v-on:click="handleClick"
          >{{ user.fullName }}</b-list-group-item>-->

          <router-link
            v-bind:to="`/user/${index + 1}`"
            tag="b-list-group-item"
            exact-active-class="active"
            v-for="(user, index) in listUser"
            v-bind:key="index"
          >{{ user.fullName }}</router-link>
        </b-list-group>
      </b-col>
      <b-col cols="8">
        <template v-if="getCurrentUser">
          <b-card-group deck>
            <b-card header="User with list group">
              <b-list-group>
                <b-list-group-item href="#">{{ getCurrentUser.fullName }}</b-list-group-item>
                <b-list-group-item href="#">{{ getCurrentUser.email }}</b-list-group-item>
              </b-list-group>

              <p class="card-text mt-2">{{ getCurrentUser.description }}</p>
            </b-card>
          </b-card-group>
        </template>
        <template v-else>
          <p>User không tồn tại</p>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ListUser from "../mock/list-user";
export default {
  name: "list-user",
  data() {
    return {
      listUser: ListUser,
      currentId: null
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getCurrentUser() {
      let id = parseInt(this.currentId);
      if (id > this.listUser.length) {
        return null;
      }
      return this.listUser[id - 1];
    }
  },
  watch: {
    $route(to, from) {
      this.currentId = to.params.id;
      console.log(to.params.id, from.params.id);
    }
  }
};
</script>

<style>
</style>
