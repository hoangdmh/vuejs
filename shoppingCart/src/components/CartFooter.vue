<template>
  <tfoot id="my-cart-footer">
    <tr>
      <td colspan="4">There are <b>{{ footerInfo.countItem }}</b> items in your shopping cart.</td>
      <td colspan="2" class="total-price text-left">{{ formatPrice }}</td>
    </tr>
  </tfoot>
</template>

<script>
import { mapGetters } from 'vuex'
import { toCurrency } from './../helpers/index';

export default {
  name: 'cart-footer',
  computed: {
    ...mapGetters({
      footerInfo: 'cart/tfootInfo'
    }),
    formatPrice(){
      return toCurrency(this.footerInfo.totalPrice, 'USD', 'right')
    }
  }
}
</script>

<style>

</style>
