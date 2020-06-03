<template>
  <tr>
    <td class="text-center">{{index}}</td>
    <td>{{task.name}}</td>
    <td class="text-center">
      <span class="badge" v-bind:class="classLevel">
        {{getLevelName}}
      </span>
    </td>
    <td>
      <button
        v-on:click="handleEdit"
        type="button" class="btn btn-warning">Edit</button>
      <button
        v-on:click="handleDelete"
        type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import mapLevel from '../mocks/level';

import { mapActions } from 'vuex'

export default {
  name: 'todo-list-item',
  props: {
    task: {
      type: Object,
      default: null
    },
    index: {
      type: Number
    }
  },
  created() {
    //console.log('todo-list-item mapLevel => ', mapLevel);
  },
  methods: {
    ...mapActions({
      'actionHandleDelete': 'handleDelete'
    }),
    handleDelete(){
      if(confirm('Ban co muon xoa task ' +this.task.name)){
        //console.log('handleDelete =>', this.task);
        this.actionHandleDelete(this.task);
      }
    },
    handleEdit(){
      this.$emit('handleEdit', this.task);
    }
  },
  computed: {
    getLevelName(){
      return this.mapLevel[this.task.level].name;
    },
    classLevel(){
      return this.mapLevel[this.task.level].class;
    }
  },
  data(){
    return {
      mapLevel: mapLevel
    }
  }
}
</script>

<style>

</style>
