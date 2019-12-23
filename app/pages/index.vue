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
            v-btn(color="primary")
              span.px-3 {{buttonText}}
</template>

<script>
export default {
  data () {
    return {
      isCreateMode: false
    }
  },
  computed: {
    buttonText () {
      return this.isCreateMode ? '新規登録' : 'ログイン'
    }
  }
}
</script>
