<template>
  <div id="app">
    <div class="container">
      <comp-title />

      <div class="row">
        <product-list />

        <cart-wrapper />
      </div>
      <notifications group="noti" position="bottom right" />
    </div>
  </div>
</template>

<script>
import CompTitle  from './components/CompTitle';
import ProductList from './components/ProductList';
import CartWrapper from './components/CartWrapper'


export default {
  name: 'app',
  components: {
    CompTitle,
    ProductList,
    CartWrapper
  },
  data () {
    return {

    }
  },
  // mounted(){
  //   this.$notify({
  //     group: 'noti',
  //     title: 'Important message',
  //     text: 'Hello user! This is a notification!'
  //   });
  // }
}
</script>

<style lang="scss">

</style>
