import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === false) {
    next();// cho phep vao
  } else {
    next({
      name: 'home-page',
      query: {
        redirect: to.name
      }
    })
  }
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === true) {
    next(); //cho pheo vao
  } else {
    next({
      name: 'login-page',
      query: {
        redirect: to.name
      }
    })
  }
}

export {
  ifNotAuthenticated,
  ifAuthenticated
}
