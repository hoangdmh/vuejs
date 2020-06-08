<template>
  <tr>
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.name}}</td>
      <td>{{ formatPrice }}</td>
      <td>
        <input
          v-bind:value="cart.quantity"
          @blur="handleUpdate"
          type="number" min="1">
        </td>
      <td><strong>{{ formatTotal }}</strong></td>
      <td>
        <a @click.prevent="" class="label label-info update-cart-item" href="#">Update</a>
        <a @click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#">Delete</a>
      </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex';
import {NOTI_ATC_DELETE, NOTI_GREATER_THAN_ONE, NOTI_ATC_UPATE} from './../constants/config';
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
      atcDeleteCart: 'cart/actDeleteCart',
      setLoading: 'setLoading',
      actUpdateQuantity: 'cart/actUpdateQuantity'
    }),
    handleDelete(e){
      if(confirm('Bạn muốn xóa đơn hàng: ' +this.cart.product.name)){
        this.atcDeleteCart(this.cart);
        this.$notify(NOTI_ATC_DELETE);
      }
    },
    handleUpdate(e){
      this.setLoading(true);
      setTimeout(() =>{
        let quantity = e.target.value
        const check = validateQuantity(quantity);
        if(check){
          var data= {
            cartUpdate: this.cart,
            quantity: parseInt(quantity)
          }
          this.actUpdateQuantity(data);
          this.$notify(NOTI_ATC_UPATE);
        }else {
          e.target.value = this.cart.quantity;
          this.$notify(NOTI_GREATER_THAN_ONE);
        }
        this.setLoading(false);
      },1000);
    }
  }
}
</script>

<style>

</style>
