<template>
  <!-- SEARCH : START -->
  <div class="col-12">
    <div class="input-group">
      <input
        v-bind:value="strSearch"
        v-on:input="handleSearch"
        type="text" class="form-control" placeholder="Search for..." />
      <span class="input-group-append">
        <button
          v-on:click="handleClear"
          class="btn btn-info" type="button">Clear!</button>
      </span>
    </div>
  </div>
  <!-- SEARCH : END -->
</template>

<script>
export default {
  name: 'control-search',
  props: {
    strSearch: {
      type: String,
      default: ''
    }
  },
  data(){
    return {

    }
  },
  methods: {
    handleSearch(e){
      this.$emit('handleSearch',e.target.value);
    },
    handleClear(e){
      this.$emit('handleSearch', '');
    }
  }
}
</script>

<style>

</style>
