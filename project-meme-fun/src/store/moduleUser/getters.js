import { parseJwt } from '../../helpers/index';

export default {
  isLogin: state => {
    let userObj = parseJwt(state.ACCESS_TOKEN);
    if (userObj) {
      return true
    } else {
      return false
    }
  },
  currentUser: state => {
    return state.currentUser
  }
}
