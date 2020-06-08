export default {
  tfootInfo: state => {
    let {listCarts} =  state;
    let initObjectSum = {
      countItem: 0,
      totalPrice: 0
    };
    return listCarts.reduce(function(objSum, objCart){
      let countItem = objSum.countItem + objCart.quantity;
      let totalPrice = objSum.totalPrice + objCart.product.price * objCart.quantity;
      return {
        countItem,
        totalPrice
      }
    }, initObjectSum)
  }
}
