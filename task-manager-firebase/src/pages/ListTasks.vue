<template>
  <div class="main-content">
    <page-title>
      <router-link to="/create" class="create-new-item">Create New Item</router-link>
    </page-title>
    <div class="wrapper-board">
      <div class="row">
        <div class="item">
          <div class="col-title">Todo</div>
          <task-item
            v-for="todo in getListTaskFilter.todo"
            v-bind:key="todo.id"
            v-bind:task="todo"
          />
        </div>

        <div class="item">
          <div class="col-title">In Process</div>
          <task-item
            v-for="inProgress in getListTaskFilter.inProgress"
            v-bind:key="inProgress.id"
            v-bind:task="inProgress"
          />
        </div>

        <div class="item">
          <div class="col-title">Bugs</div>
          <task-item
            v-for="toVerify in getListTaskFilter.toVerify"
            v-bind:key="toVerify.id"
            v-bind:task="toVerify"
          />
        </div>

        <div class="item">
          <div class="col-title">Done</div>
          <task-item
            v-for="done in getListTaskFilter.done"
            v-bind:key="done.id"
            v-bind:task="done"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TaskItem from "../components/TaskItem";
import PageTitle from "../components/PageTitle";

export default {
  name: "list-tasks",
  components: {
    PageTitle,
    TaskItem
  },
  computed: {
    ...mapGetters(["getListTaskFilter"])
  }
};
</script>

<style>
</style>
