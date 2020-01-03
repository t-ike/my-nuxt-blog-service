<template lang="pug">
  section.container
    v-card(min-width="500")
      v-card-text
        v-form.px-2.pt-2
          v-text-field(
            placeholder="タイトルを入力"
            outlined
            v-model="formData.title"
            )
          v-textarea(
            placeholder="本文を入力……"
            outlined
            v-model="formData.body"
            )
          v-row
            v-spacer
            v-btn(
              rounded
              color="primary"
              @click="publish"
              publish
              )
              | <v-icon>mdi-upload</v-icon> Publish
      
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  asyncData({ redirect, store }) {
    if (!store.getters.user) {
      redirect('/')
    }
    return {
      formData: {
        title: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async publish() {
      const payload = {
        user: this.user,
        ...this.formData
      }
      await this.publishPost({ payload })
      this.$router.push('/posts')
    },
    ...mapActions('users', ['updateUser']),
    ...mapActions('posts', ['publishPost'])
  }
}
</script>

<style lang="sass" scoped>
v-btn
  .publish
    cursor: pointer
</style>
