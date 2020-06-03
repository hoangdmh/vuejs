<template>
  <div class="col-12 col-lg-6">
    <div class="row">
      <ControlSort></ControlSort>

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
  components: {
    ControlSort,
    ControlSearch
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
