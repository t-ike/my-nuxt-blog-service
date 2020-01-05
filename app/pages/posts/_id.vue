<template lang="pug">
  section
    v-card(min-width="500")
      v-card-title {{post.title}}
      v-card-subtitle by {{ post.user.id }}
      v-divider
      v-card-text
        p {{post.body}}
        p(align="right") {{post.created_at | time}}
    div.mt-3
      v-btn(to="/posts" nuxt) 投稿一覧へ戻る

</template>

<script>
import { mapGetters } from 'vuex'
// import { mapGetters, mapActions } from 'vuex'
import moment from '~/plugins/moment'
// import cloneDeep from 'lodash.clonedeep'

export default {
  async asyncData({ store, route, error }) {
    if (store.getters['posts/posts'].find((p) => p.id === route.params.id)) {
      return
    }
    try {
      await store.dispatch('posts/fetchPost')
      if (!store.getters['posts/posts'].find((p) => p.id === route.params.id)) {
        throw new Error('post not found')
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  computed: {
    post() {
      return this.posts.find((p) => p.id === this.$route.params.id)
    },
    // isLiked() {
    //   if (!this.user) return false
    //   return this.post.likes.find(l => l.user_id === this.user.id)
    // },
    // ...mapGetters(['user', 'isLoggedIn']),
    ...mapGetters('posts', ['posts'])
  },
  // methods: {
  //   like() {
  //     if (!this.isLoggedIn) {
  //       return
  //     }
  //     const likePayload = { user: this.user, post: this.post }
  //     this.addLikeToPost(cloneDeep(likePayload))
  //     this.addLikeLogToUser(cloneDeep(likePayload))
  //   },
  //   unlike() {
  //     if (!this.isLoggedIn) {
  //       return
  //     }
  //     const likePayload = { user: this.user, post: this.post }
  //     this.removeLikeToPost(cloneDeep(likePayload))
  //     this.removeLikeLogToUser(cloneDeep(likePayload))
  //   },
  //   ...mapActions(['addLikeLogToUser', 'removeLikeLogToUser']),
  //   ...mapActions('posts', ['addLikeToPost', 'removeLikeToPost'])
  // },
  filters: {
    time(val) {
      return moment(val).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>
