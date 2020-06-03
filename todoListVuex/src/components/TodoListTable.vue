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
import { mapState, mapActions } from 'vuex'


export default {
  name: 'todo-list-table',
  components: {
    TodoListItem
  },
  computed: {
    ...mapState([
      'listTask'
    ])
  },
  watch: {
    listTask: function(newTask){
      var taskString = JSON.stringify(newTask);
      localStorage.setItem('tasks', taskString);
      console.log('Watch taskString =>', taskString);
    }
  },
  created() {
    let tasks = localStorage.getItem('tasks') || '[]';
    //console.log('TASK => ', localStorage.getItem('tasks'));
    //console.log('created TodoListTable.vue', JSON.parse(tasks));
    this.changeTasks(JSON.parse(tasks));
  },
  methods: {
    ...mapActions([
      'changeTasks'
    ]),
    handleDelete(taskDelete){
      this.$emit('handleDelete', taskDelete);
    },
    handleEdit(taskEdit){
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
