import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
  // router chi cho phep vao khi chua dang nhap (Login, Register)
  // console.log('Store', store);
  // console.log('To', to);
  // console.log('from', from);
  // next();

  if (store.getters.isLogin === false) {
    next();// cho pheo vao
  } else {
    next({
      name: 'home-page',
      query: {
        redirect: to.name
      }
    })
    //next('/')
  }
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLogin === true) {
    next(); //cho pheo vao
  } else {
    next({
      name: 'login',
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
