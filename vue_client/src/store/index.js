import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curLogin: 'noneLogin',
    curPass: 'none',
    curID: -1
  },
  mutations: {
    tryToLogin (state, log, pas) {
      state.obj = {...state, curLogin: log}
      state.obg = {...state, curPass: pas}
    }
  }
})
