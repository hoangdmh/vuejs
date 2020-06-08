export default {
  CHANGE_QUANTITY: (state, {index, quantity, isReplay = false}) => {
    //console.log('CHANGE_QUANTITY ', index, quantity, isReplay);
    if(isReplay){
      state.listCarts[index].quantity = quantity;
    }else {
      state.listCarts[index].quantity += quantity;
    }

    //console.log(state, index, quantity);
  },
  BUY_PRODUCT: (state, data) => {
    state.listCarts.push(data)
  },
  CHANGE_LIST_CART: (state, newListCart) => {
    //console.log('DELETE_CART', cartDelete.product.id);
    state.listCarts = newListCart;
  }
}
