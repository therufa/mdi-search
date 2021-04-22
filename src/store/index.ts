import { createStore } from 'vuex'

let timeout = null

export default createStore({
  state: {
    toast: null
  },
  mutations: {
    SET_TOAST (state, toast) {
      state.toast = toast
    }
  },
  actions: {
    toast ({ commit }, { text, title, duration = 2000 }) {
      clearTimeout(timeout)

      commit('SET_TOAST', { text, title })

      timeout = setTimeout(() => commit('SET_TOAST', null), duration)
    }
  },
  modules: {
  }
})
