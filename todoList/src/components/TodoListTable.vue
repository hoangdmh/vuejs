<template>
  <div class="card panel-success">
    <div class="card-header">List Task</div>
    <table class="table table-hover ">
      <thead>
        <tr>
          <th style="width: 10%" class="text-center">#</th>
          <th>Task</th>
          <th style="width: 20%" class="text-center">Level</th>
          <th style="width: 160px">Action</th>
        </tr>
      </thead>

      <tbody v-if="listTask.length != 0">
        <TodoListItem
          v-for="(task, index) in listTask"
          v-bind:key="task.id"
          v-bind:task="task"
          v-bind:index="index + 1"
          v-on:handleDelete="handleDelete"
          v-on:handleEdit="handleEdit"
        ></TodoListItem>
      </tbody>

      <tbody v-else>
        <tr>
          <td colspan="4">List Empty</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
  name: 'todo-list-table',
  components: {
    TodoListItem
  },
  props: {
    listTask:{
      type: Array,
      default: []
    }
  },
  methods: {
    handleDelete(taskDelete){
      //console.log('handleDelete TotoListtable.vue',taskDelete);
      this.$emit('handleDelete', taskDelete);
    },
    handleEdit(taskEdit){
      //console.log('handleEdit TotoListtable.vue',taskEdit);
      this.$emit('handleEdit', taskEdit);
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
