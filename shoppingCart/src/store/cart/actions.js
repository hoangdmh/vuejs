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

  },
  actDeleteCart({commit, state}, cartDelete) {
    let newListCart = state.listCarts.filter( item => {
      return item.product.id != cartDelete.product.id
    });
    commit('CHANGE_LIST_CART', newListCart);
  },
  actUpdateQuantity({commit, state}, {cartUpdate, quantity}){
    let index = state.listCarts.findIndex(function(cart){
      return cart.product.id === cartUpdate.product.id
    });
    if(index != -1) {
      let data = {
        index,
        quantity,
        isReplay: true
      }
      //console.log('actUpdateQuantity ', index, quantity);
      commit('CHANGE_QUANTITY', data);
    }
  }
}
