export const state = () => ({
  status: false,
  color: 'normal',
  title: null,
  message: null
})

export const getters = {
  snackbarStatus: (state) => state.status,
  snackbarColor: (state) => state.color,
  snackbarTitle: (state) => state.title,
  snackbarMessage: (state) => state.message
}

export const mutations = {
  setSnackbarStatus(state, { status }) {
    state.status = status
  },
  setSnackbarColor(state, { color }) {
    state.color = color
  },
  setSnackbarTitle(state, { title }) {
    state.title = title
  },
  setSnackbarMessage(state, { message }) {
    state.message = message
  }
}

export const actions = {
  displaySnackbar({ commit }, { snackbar }) {
    const status = snackbar.status
    const color = snackbar.color
    const title = snackbar.title
    const message = snackbar.message
    commit('setSnackbarStatus', { status })
    commit('setSnackbarColor', { color })
    commit('setSnackbarTitle', { title })
    commit('setSnackbarMessage', { message })
  },
  setStatus({ commit }, { status }) {
    commit('setSnackbarStatus', { status })
  }
}
