<template>
  <tbody id="my-cart-body">
    <!-- CART BODY -->
    <cart-body-item />
  </tbody>
</template>

<script>
import CartBodyItem from './CartBodyItem'

export default {
  name: 'cart-body-table',
  components: {
    CartBodyItem
  }
}
</script>

<style>

</style>
