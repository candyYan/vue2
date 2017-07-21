import {
  getUser
} from '../service/getData'

import { GET_USERINFO } from './mutation-types'

export default {
  async getUserInfo({commit}) {
    let res = await getUser();
    console.log(res)
    commit(GET_USERINFO, res);
  }
}
