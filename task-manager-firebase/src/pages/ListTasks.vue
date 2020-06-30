<template>
  <div class="main-content">
    <page-title>
      <router-link to="/create" class="create-new-item">Create New Item</router-link>
    </page-title>
    <div class="wrapper-board">
      <div class="row">
        <div class="item">
          <div class="col-title">Todo</div>
          <task-item />
        </div>

        <div class="item">
          <div class="col-title">In Process</div>
          <task-item />
        </div>

        <div class="item">
          <div class="col-title">Bugs</div>
          <task-item />
        </div>

        <div class="item">
          <div class="col-title">Done</div>
          <task-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "../components/TaskItem";
import PageTitle from "../components/PageTitle";

export default {
  name: "list-tasks",
  components: {
    PageTitle,
    TaskItem
  }
};
</script>

<style>
</style>
