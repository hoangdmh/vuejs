<template>
  <!-- PRODUCT : START -->
  <div class="media product">
    <div class="media-left">
      <a href="#">
        <img class="media-object" v-bind:src="urlImage" alt="charmander">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ product.name }}</h4>
      <p>{{ product.summary }}</p>
      <template v-if="product.canBuy">
        <input name="quantity-product-1" type="number" value="1" min="1">
        <a data-product="1" href="#" class="price"> {{ formatPrice }} </a>
      </template>
      <span v-else class="price">{{ formatPrice }}</span>
    </div>
  </div>
  <!-- PRODUCT : END -->
</template>

<script>
import { toCurrency } from './../helpers/index'

export default {
  name: 'product-item',
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  computed: {
    urlImage(){
      return '/dist/images/' + this.product.image
    },
    formatPrice(){
      return toCurrency(this.product.price, 'USD', 'right')
    }
  }
}
</script>

<style>

</style>
