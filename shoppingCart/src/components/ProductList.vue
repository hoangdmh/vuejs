<template>
  <!-- LIST PRODUCT : START -->
  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1 class="panel-title">List Products</h1>
      </div>
      <div class="panel-body" id="list-product">

        <product-item
          v-for="item in products"
          :product="item"
          :key="item.id"
        />

      </div>
    </div>
  </div>
  <!-- LIST PRODUCT : END -->
</template>

<script>
import ProductItem from './ProductItem';

import { mapState } from 'vuex'

export default {
  name: 'product-list',
  components: {
    ProductItem
  },
  computed: {
    ...mapState({
      products: state => state.product.productList
    })
  }
}
</script>

<style>

</style>
