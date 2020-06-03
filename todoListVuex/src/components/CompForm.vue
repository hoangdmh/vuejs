<template>
  <div class="col-12 col-lg-6">
    <!-- ADD : START -->
    <form-add


      v-bind:taskSelected="taskSelected"
    />
    <!-- ADD : END -->

    <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input v-model="taskName" type="text" class="form-control" placeholder="Task Name" />
      </div>
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <select v-model="level" name="ds" class="form-control" required="required">
          <option value="0">Small</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
      </div>

      <button
        v-if="taskSelected === null"
        v-on:click="handleAddnew"
        type="button" class="btn btn-primary">Submit</button>
      <button
        v-else
        v-on:click="handleEditTask"
        type="button" class="btn btn-primary">Update</button>
      <button
        v-on:click="handleCancel"
        type="button" class="btn btn-secondary">
      Cancel</button>
    </form>
  </div>
</template>

<script>
import FormAdd from './FormAdd';

import { v4 as uuidv4 } from 'uuid';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'comp-form',
  props: {
    taskSelected: {
      type: Object,
      default: null
    }
  },
  components: {
    FormAdd
  },
  data(){
    return {
      taskName: '',
      level: 0
    }
  },
  watch: {
    taskSelected: function(newData, oldData) {
      if(newData !== null){
        this.taskName = newData.name;
        this.level = newData.level;
      }
    }
  },
  computed: {
    ...mapState([
      'isShowForm'
    ])
  },
  methods: {
    ...mapActions([
      'toggleForm',
      'handleAddNewtask'
    ]),
    handleAddnew(){
      let objTask = {
        id: uuidv4(),
        name: this.taskName,
        level: parseInt(this.level)
      }
      if(this.taskName === ''){
        alert('Vui long nhap task name')
      }else{
        //this.$store.dispatch('handleAddNewtask', objTask);
        this.handleAddNewtask(objTask);
        this.handleCancel();
      }
    },
    handleCancel(){
      this.toggleForm();
      this.handleResetData();
    },
    handleResetData(){
      this.taskName = '';
      this.level = 0;
    },
    handleEditTask(){
      let objTaskEdit = {
        id: this.taskSelected.id,
        name: this.taskName,
        level: parseInt(this.level)
      }
      this.$emit('handleEditTaskById', objTaskEdit);
      this.handleResetData();
    }
  }
}
</script>

<style>

</style>
