export default {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setAuth({ commit }, name) {
    commit('SET_AUTH', name)
  },
  logout({ commit }) {
    commit('USER_LOGOUT')
  }
}
