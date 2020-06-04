<template>
  <tr>
      <th scope="row">1</th>
      <td>Lorem ipsum.</td>
      <td>12 USD</td>
      <td><input name="cart-item-quantity-1" type="number" value="1" min="1"></td>
      <td><strong>12 USD</strong></td>
      <td>
        <a class="label label-info update-cart-item" href="#" data-product="">Update</a>
        <a class="label label-danger delete-cart-item" href="#" data-product="">Delete</a>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'cart-body-item',
}
</script>

<style>

</style>
