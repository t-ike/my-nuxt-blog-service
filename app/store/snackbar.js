export const state = () => ({
  snackbar: {
    status: false,
    color: 'normal',
    title: null,
    message: null
  }
})

export const getters = {
  snackbar: (state) => state.snackbar
}

export const mutations = {
  setSnackBar(state, { snackbar }) {
    state.snackbar.status =
      'status' in snackbar ? snackbar.status : state.snackbar.status
    state.snackbar.color =
      'color' in snackbar ? snackbar.color : state.snackbar.color
    state.snackbar.message =
      'message' in snackbar ? snackbar.message : state.snackbar.message
    state.snackbar.title =
      'title' in snackbar ? snackbar.title : state.snackbar.title
  }
}

export const actions = {
  displaySnackbar({ commit }, { snackbar }) {
    commit('setSnackBar', { snackbar })
  }
}
