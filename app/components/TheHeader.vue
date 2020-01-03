<template lang="pug">
div
    v-app-bar
        //- v-app-bar-nav-icon
        v-toolbar-title
            span.px-3 My Nuxt Blog Service
        v-toolbar-items
            v-btn(text) 投稿一覧
        v-spacer
        v-toolbar-items
            v-btn(v-if="user" text) {{ user.id }}
            v-btn(text to="/posts/new" nuxt) 新規投稿
            v-btn(text) ログイン
            v-btn(text @click="logout") ログアウト
        v-menu(left bottom)
            template(v-slot:activator="{ on }")
                v-btn(icon v-on="on")
                    v-icon mdi-dots-vertical
            v-list
                v-list-item(v-for="n in 5" :key="n")
                    v-list-item-title Option {{ n }}

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped></style>
