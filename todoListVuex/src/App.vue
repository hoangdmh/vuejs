<template>
  <div id="app">
    <b-container>
      <CompTitle></CompTitle>

      <b-row>
        <CompControl
          v-bind:orderBy="orderBy"
          v-bind:orderDir="orderDir"
          v-on:handleSort="handleSort"
        ></CompControl>

        <CompForm
          v-on:handleAddNewtask="handleAddNewtask"
          v-bind:taskSelected="taskSelected"
          v-on:handleEditTaskById="handleEditTaskById"
        ></CompForm>
      </b-row>

      <TodoListTable
        v-on:handleDelete="handleDelete"
        v-on:handleEdit="handleEdit"
      ></TodoListTable>
    </b-container>
  </div>
</template>

<script>
import CompTitle from './components/CompTitle';
import CompControl from './components/CompControl';
import CompForm from './components/CompForm';
import TodoListTable from './components/TodoListTable';

import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    CompTitle,
    CompControl,
    CompForm,
    TodoListTable
  },
  data () {
    return {
      //listTask: [],
      //isShowForm: false,
      //strSearch: '',
      orderBy: 'name',
      orderDir: 'asc',
      taskSelected: null
    }
  },
  computed: {
    // listTaskSearch(){
    //   const {strSearch} = this;
    //   const newItems = this.listTask.filter( item => {
    //     let lowerName = item.name.toLowerCase();
    //     let lowerSubString = strSearch.toLowerCase();
    //     return lowerName.includes(lowerSubString);
    //   });
    //   return newItems;
    // },
    listTaskSort(){
      var listTask = [...this.listTaskSearch];
      listTask.sort(this.compareSort);
      return listTask;
    }
  },
  methods: {
    handleSort(data){
      this.orderBy = data.orderBy;
      this.orderDir = data.orderDir;
    },
    compareSort(a, b){
      var numberSort = this.orderDir === 'asc' ? -1 : 1;
      if(a[this.orderBy] < b[this.orderBy]){
        return numberSort;
      }if(a[this.orderBy] > b[this.orderBy]){
        return numberSort * (-1);
      }
      return 0;
    },
    handleDelete(taskDelete){
      var newItems = this.listTask.filter(function(task){
        return task.id !== taskDelete.id;
      });
      this.listTask = newItems;
    },
    handleAddNewtask(task){
      this.listTask.push(task);
    },
    handleEdit(taskEdit){
      this.isShowForm = true;
      this.taskSelected = taskEdit;
    },
    handleEditTaskById(taskEdit){
      let index = this.listTask.findIndex(function(item){
        return item.id === taskEdit.id
      });
      console.log('index => ', index);

      if(this.listTask[index].id === taskEdit.id){
        this.listTask.splice(index, 1, taskEdit);
      }
      this.toggleForm();
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    padding: 50px 0 0;
  }
  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
  }
  .table {
    margin-bottom: 0;
  }
  .container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  span.badge-medium {
    padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
  }
  button:focus,
  input:focus,
  .form-control:focus  {
    box-shadow: none !important;
  }

  @media (max-width: 992px) {
    .add-task {
      margin-top: 50px;
    }
  }

</style>
