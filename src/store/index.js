// import JWTDecode from 'jwt-decode'
// import cookieparser from 'cookieparser'
export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (process.server && process.static) return
      if (!req.headers.cookie) return
      // const parsed = cookieparser.parse(req.headers.cookie)
      const accessToken = {
        user_id: 'user_id',
        email: 'email'
      }
      if (!accessToken) return
      // const decoded = JWTDecode(accessToken)
      const decoded = accessToken
      if (decoded) {
        commit('auth/SUCCESS_AUTH', {
          uid: decoded.user_id,
          email: decoded.email
        })
      }
    }
  }
}
