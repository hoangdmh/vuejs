import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import ModuleCart from './cart/index';
import ModuleProduct from './product/index';

Vue.use(Vuex)

const localStorage = store => {
  store.subscribe((mutation, state) => {
    //console.log('subscribe =>',state);
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  })
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    cart: ModuleCart,
    product: ModuleProduct
  },
  plugins: [localStorage]
});

// console.log('Store => ', store);
// console.log('Store state=> ', store.state.count);
// console.log('Store Cart state=> ', store.state.cart.count);
// console.log('Store Product state=> ', store.state.product.count);

export default store;
