export default {
  login({ commit }, Data) {
    commit('SUCCESS_AUTH', Data)
  },
  logout({ commit }) {
    commit('LOG_OUT')
  }
}
