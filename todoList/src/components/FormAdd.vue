<template>
  <!-- ADD : START -->
  <div class="form-group add-task">
    <button
      v-if="!isShowForm"
      v-on:click="onClickAddTask"
      type="button" class="btn btn-info btn-block">Add Task</button>
    <button v-else
      v-on:click="onClickAddTask"
      type="button" class="btn btn-primary btn-block">Close Form</button>
  </div>
  <!-- ADD : END -->
</template>

<script>
export default {
  name: 'form-add',
  data(){
    return {

    }
  },
  props: {
    isShowForm: {
      typy: Boolean,
      default: false
    }
  },
  methods: {
    onClickAddTask(){
      //console.log('FormAdd.vue');
      this.$emit('handleToggleForm')
    }
  }
}
</script>

<style>

</style>
