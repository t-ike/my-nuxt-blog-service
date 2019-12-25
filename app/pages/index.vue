<template lang="pug">
  section.container
    v-card(min-width="500")
      v-card-title.title.font-weight-light Login
      v-divider
      v-form.pa-8
        v-text-field(
          color="primary"
          label="メールアドレス"
          type="email"
          placeholder="akerun@photosynth.co.jp"
          outlined
          prepend-inner-icon="mdi-email"
        )
        div.d-flex
          v-checkbox(v-model="isCreateMode" label="アカウントを作成する").py-0.my-0
          v-spacer
          v-card-actions
            //- v-btn(color="primary" @click="snackbar=true")
            v-btn(color="primary" @click="handleClickSubmit")
              span.px-3 {{buttonText}}
            v-snackbar(v-model="this.snackbar.status")
              | {{ this.snackbar.message }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cookies from 'universal-cookie'

export default {
  asyncData({ redirect, store }) {
    if (store.getters.user) {
      redirect('/posts/')
    }
    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? '新規登録' : 'ログイン'
    },
    // storeのuserのgetterを展開
    ...mapGetters(['user', 'snackbar'])
  },
  methods: {
    async handleClickSubmit() {
      const cookies = new Cookies()
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData })
          cookies.set('user', JSON.stringify(this.user))
          this.$router.push('/posts/')
        } catch (e) {
          console.log(e)
          this.$notify.error({
            title: 'アカウント作成失敗',
            message: '既に登録されているか、不正なユーザー ID です',
            position: 'bottom-right',
            duration: 1000
          })
        }
      } else {
        try {
          await this.login({ ...this.formData })
          cookies.set('user', JSON.stringify(this.user))
          // this.$router.push('/posts/')
        } catch (e) {
          console.log(e)
          this.$notify.error({
            title: 'ログイン失敗',
            message: '不正なユーザー ID です',
            position: 'bottom-right',
            duration: 1000
          })
        }
      }
    },
    // storeのactionを展開
    ...mapActions(['login', 'register'])
  }
}
</script>
