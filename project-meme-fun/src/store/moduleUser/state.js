import { CONFIG_ACCESS_TOKEN } from '../../constants';

export default {
  currentUser: null, //login
  users: {},
  //[CONFIG_ACCESS_TOKEN]: '',
  [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN),
  posts: {}
}
