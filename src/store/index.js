import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    first: 1
  },
  mutations: {
    change (state, step) {
      state.first += step || 0
    }
  },
  actions: {
    asyncChange (context, n) {
      setTimeout(() => {
        console.log(context)
        context.commit('change', n)
      }, 1000)
    }
  },
  getters: {
    showChange (state) {
      return `当前最新值${state.first}`
    }
  }
})
