<template>
  <tr>
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.name}}</td>
      <td>{{ formatPrice }}</td>
      <td><input v-bind:value="cart.quantity" type="number" min="1"></td>
      <td><strong>{{ formatTotal }}</strong></td>
      <td>
        <a class="label label-info update-cart-item" href="#">Update</a>
        <a v-on:click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#">Delete</a>
      </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex';
import {NOTI_ATC_DELETE} from './../constants/config';
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
  },
  methods: {
    ...mapActions({
      atcDeleteCart: 'cart/actDeleteCart'
    }),
    handleDelete(e){
      if(confirm('Bạn muốn xóa đơn hàng: ' +this.cart.product.name)){
        this.atcDeleteCart(this.cart);
        this.$notify(NOTI_ATC_DELETE);
      }
    }
  }
}
</script>

<style>

</style>
