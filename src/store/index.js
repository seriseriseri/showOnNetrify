import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textMessage: 'not changed'
  },
  mutations: {
    changeTextMessage(state, text) {
      state.textMessage = text;
    }
  },
  actions: {
  },
  modules: {
  }
})
