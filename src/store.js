import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gitHubUsers: [],
    repos: [],
    token: '', // if request limit add token
    title: 'Github'
  },
  mutations: {

  },
  actions: {

  }
})
