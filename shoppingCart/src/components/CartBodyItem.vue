<template>
  <tr>
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.name}}</td>
      <td>{{ formatPrice }}</td>
      <td><input v-bind:value="cart.quantity" type="number" min="1"></td>
      <td><strong>{{ formatTotal }}</strong></td>
      <td>
        <a class="label label-info update-cart-item" href="#" data-product="">Update</a>
        <a class="label label-danger delete-cart-item" href="#" data-product="">Delete</a>
      </td>
    </tr>
</template>

<script>
import { toCurrency, validateQuantity } from './../helpers/index';

export default {
  name: 'cart-body-item',
  props: {
    cart: {
      type: Object,
      default: {}
    },
    index: {
      type: Number
    }
  },
  computed: {
    product(){
      return this.cart.product
    },
    formatPrice(){
      return toCurrency(this.cart.product.price, 'USD', 'right')
    },
    formatTotal(){
      return toCurrency(this.cart.product.price * this.cart.quantity, 'USD', 'right')
    }
  }
}
</script>

<style>

</style>
