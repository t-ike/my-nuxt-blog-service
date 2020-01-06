import Cookies from 'universal-cookie'
import moment from '~/plugins/moment'

export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  clearUser(state) {
    state.user = null
    state.isLoggedIn = false
  }
}

export const actions = {
  async login({ dispatch, commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) {
      const snackbar = {
        status: true,
        color: 'error',
        title: 'ログイン失敗',
        message: '不正なユーザー ID です'
      }
      dispatch('snackbar/displaySnackbar', { snackbar }, { root: true })
      throw new Error('Invalid user')
    }
    commit('setUser', { user })
    const snackbar = {
      status: true,
      color: 'success',
      title: 'ログイン成功',
      message: 'ようこそ、My Nuxt Blog Serviceへ！'
    }
    dispatch('snackbar/displaySnackbar', { snackbar }, { root: true })
  },
  async register({ dispatch, commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) {
      const snackbar = {
        status: true,
        color: 'error',
        title: 'アカウント作成失敗',
        message: '既に登録されているか、不正なユーザー ID です'
      }
      dispatch('snackbar/displaySnackbar', { snackbar }, { root: true })
      throw new Error('Invalid user')
    }
    commit('setUser', { user })
    const snackbar = {
      status: true,
      color: 'success',
      title: 'アカウント作成成功',
      message: 'ようこそ、My Nuxt Blog Serviceへ！'
    }
    dispatch('snackbar/displaySnackbar', { snackbar }, { root: true })
  },
  logout({ commit }) {
    const cookies = new Cookies()
    cookies.remove('user', { path: '/' })
    commit('clearUser')
  },
  async addLikeLogToUser({ commit }, { user, post }) {
    user.likes.push({
      created_at: moment().format(),
      user_id: user.id,
      post_id: post.id
    })
    const newUser = await this.$axios.$put(`/users/${user.id}.json`, user)
    commit('updateUser', { user: newUser })
  },
  async removeLikeLogToUser({ commit }, { user, post }) {
    user.likes = post.likes.filter((like) => like.user_id !== user.id) || []
    const newUser = await this.$axios.$put(`/users/${user.id}.json`, user)
    commit('updateUser', { user: newUser })
  }
}
