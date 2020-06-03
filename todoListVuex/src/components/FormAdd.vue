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
import { mapState, mapActions } from 'vuex'


export default {
  name: 'form-add',
  data(){
    return {

    }
  },
  // props: {
  //   isShowForm: {
  //     typy: Boolean,
  //     default: false
  //   }
  // },
  computed: {
    ...mapState([
      'isShowForm'
    ])
  },
  methods: {
    ...mapActions([
      'toggleForm'
    ]),
    onClickAddTask(){
      console.log('onClickAddTask FormAdd.vue');
      this.toggleForm();
    }
  }
}
</script>

<style>

</style>
