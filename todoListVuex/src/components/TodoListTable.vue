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
import { mapState, mapActions, mapGetters } from 'vuex'


export default {
  name: 'todo-list-table',
  components: {
    TodoListItem
  },
  computed: {
    //Cách 1 array
    // ...mapGetters([
    //   'listTaskSearch',
    // ])

    //Cách 2 object
    ...mapGetters({
      'listTask': 'listTaskSearchSort'
    })
  },
  watch: {
    listTask: function(newTask){
      var taskString = JSON.stringify(newTask);
      localStorage.setItem('tasks', taskString);
    }
  },
  created() {
    let tasks = localStorage.getItem('tasks') || '[]';
    this.changeTasks(JSON.parse(tasks));
  },
  methods: {
    ...mapActions([
      'changeTasks'
    ]),
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
