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
            v-btn(text) 新規投稿
            v-btn(text) ログイン
        v-menu(left bottom)
            template(v-slot:activator="{ on }")
                v-btn(icon v-on="on")
                    v-icon mdi-dots-vertical
            v-list
                v-list-item(v-for="n in 5" :key="n")
                    v-list-item-title Option {{ n }}

</template>

<script>
export default {
}
</script>

<style scoped>

</style>
