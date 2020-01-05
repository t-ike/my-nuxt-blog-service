<template lang="pug">
  v-container
    v-row(v-if="user")
      v-col(cols="3")
        v-card(align="center")
          v-avatar(tile size="150").mt-5
            v-img(src="https://placehold.it/150x150")
          v-card-text {{ user.id }}
      v-col(cols="9")
        v-card.pa-3
          v-card-title {{user.id}} さんの投稿
          v-simple-table
            template(v-slot:default)
              thead
                tr
                  th タイトル
                  th 投稿日時
              tbody
                tr(v-for="post in userPosts" :key="post.id")
                  th {{post.title}}
                  th {{post.created_at}}
</template>

<script>
import { mapGetters } from 'vuex'
import moment from '~/plugins/moment'

export default {
  async asyncData({ store, route, error }) {
    const { id } = route.params
    try {
      await store.dispatch('users/fetchUser', { id })
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  computed: {
    userPosts() {
      return Object.entries(this.user.posts).map(([id, post]) => {
        post.created_at = moment(post.createdAt).format('YYYY/MM/DD HH:mm:ss')
        return { id, ...post }
      })
    },
    user() {
      const user = this.users.find((u) => u.id === this.$route.params.id)
      if (!user) return null
      return Object.assign({ posts: [] }, user)
    },
    ...mapGetters('users', ['users'])
  }
}
</script>
