<template>
  <div class="col-12 col-lg-6">
    <div class="row">
      <ControlSort
        v-bind:orderBy="orderBy"
        v-bind:orderDir="orderDir"
        v-on:handleSort="handleSort"
      ></ControlSort>

      <ControlSearch

      ></ControlSearch>
    </div>
  </div>
</template>

<script>
import ControlSort from './ControlSort';
import ControlSearch from './ControlSearch';

export default {
  name: 'comp-control',
  props: {
    // strSearch: {
    //   type: String,
    //   default: ''
    // },
    orderBy: {
      type: String,
      default: 'name'
    },
    orderDir: {
      type: String,
      default: 'asc'
    }
  },
  components: {
    ControlSort,
    ControlSearch
  },
  data(){
    return {

    }
  },
  methods: {
    // handleSearch(data){
    //   this.$emit('handleSearch',data)
    // },
    handleSort(data){
      this.$emit('handleSort', data);
    }
  }
}
</script>

<style>

</style>
