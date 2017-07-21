import {
  GET_USERINFO
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

export default {
  //获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    if(!info.message) {
      state.userInfo = {...info};
    } else {
      state.userInfo = null;
    }
  }
}
