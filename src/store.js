import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: []
  },
  getters: {
    searchResults: state => {
      return state.searchResults;
    }
  },
  mutations: {
    updateSearchResults: (state, data) => {
      state.searchResults = data;
    }
  },
  actions: {
       
  }
})
