<template>
  <!-- SORT : START -->
  <div class="col-12">
    <div class="form-group">
      <b-dropdown text="Sort by">
        <b-dropdown-item v-on:click="handleSort('name', 'asc')">Name ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSort('name', 'desc')">Name DESC</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item v-on:click="handleSort('level', 'asc')">Level ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSort('level', 'desc')">Level DESC</b-dropdown-item>
      </b-dropdown>
      <span class="order badge badge-success badge-medium">{{orderBy}} - {{orderDir}}</span>
    </div>
  </div>
  <!-- SORT : END -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'control-sort',
  data(){
    return {

    }
  },
  computed: {
    ...mapState([
      'orderBy',
      'orderDir'
    ])
  },
  methods: {
    ...mapActions({
      'actionHandleSort': 'handleSort'
    }),
    handleSort(orderBy, orderDir){
      let data = {orderBy, orderDir}
      // console.log('handleSort', orderBy, orderDir);
      this.actionHandleSort(data);
    }
  }
}
</script>

<style>
.order {
  text-transform: capitalize;
}
</style>
