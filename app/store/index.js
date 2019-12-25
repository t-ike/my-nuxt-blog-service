export const state = () => ({
  isLoggedIn: false,
  user: null,
  snackbar: {
    status: false,
    message: null
  }
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
  snackbar: (state) => state.snackbar
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  setSnackBar(state, { snackbar }) {
    state.snackbar = snackbar
  }
}

export const actions = {
  // async login({ commit }, { id }) {
  login({ commit }, { id }) {
    const user = {
      id: 1
    }
    // const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
    const snackbar = {
      status: true,
      message: 'Success'
    }
    commit('setSnackBar', { snackbar })
  },
  // async register({ commit }, { id }) {
  register({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    // await this.$axios.$patch(`/users.json`, payload)
    // const user = await this.$axios.$get(`/users/${id}.json`)
    const user = {
      id: 1
    }
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
    const snackbar = {
      status: true,
      message: 'Success Register'
    }
    commit('setSnackBar', { snackbar })
  }
}
