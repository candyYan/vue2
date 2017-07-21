import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  userInfo: null,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
