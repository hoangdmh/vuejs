export default {
  CHANGE_QUANTITY: (state, {index, quantity}) => {
    state.listCarts[index].quantity += quantity;
    console.log(state, index, quantity);
  },
  BUY_PRODUCT: (state, data) => {
    state.listCarts.push(data)
  }
}
