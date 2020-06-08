export default {
  // {commit} object destructing
  actBuyProduct({commit, state}, data){
    //console.log('actBuyProduct', data);
    let index = state.listCarts.findIndex(function(cart){
      return cart.product.id === data.product.id
    })
    // index = -1 là không có product nào duplicate
    if(index === -1) {
      commit('BUY_PRODUCT', data)
    }else {
      let quantity = data.quantity;
      commit('CHANGE_QUANTITY', {index, quantity})
    }

  }
}
