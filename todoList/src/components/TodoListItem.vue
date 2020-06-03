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
    handleDelete(){
      //console.log('TodoListItem.vue', this.task);
      if(confirm('Ban co muon xoa task ' +this.task.name)){
        this.$emit('handleDelete', this.task);
      }
    },
    handleEdit(){
      //console.log('TodoListItem.vue', this.task);
      this.$emit('handleEdit', this.task);
    }
  },
  computed: {
    getLevelName(){
      return this.mapLevel[this.task.level].name;
      // switch (this.task.level) {
      //   case 0:
      //     return 'Small'
      //   case 1:
      //     return 'Medium'
      //   case 2:
      //     return 'heigh'
      //   default:
      //     return '';
      // }
    },
    classLevel(){
      return this.mapLevel[this.task.level].class;
      // switch (this.task.level) {
      //   case 0:
      //     return {'badge-info': true}
      //   case 1:
      //     return {'badge-warning': true}
      //   case 2:
      //     return {'badge-danger': true}
      //   default:
      //     return {};
      // }
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
