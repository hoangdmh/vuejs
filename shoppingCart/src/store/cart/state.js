let initListCart = JSON.parse(window.localStorage.getItem('cart'));
if(initListCart && initListCart.listCarts ){
  initListCart = initListCart.listCarts
}else{
  initListCart = []
}

export default {
  listCarts: initListCart
}
