<template lang="pug">
v-app
  TheHeader
  div.wrapper
    v-snackbar(v-model="isDisplayed" :color="snackbarColor" :timeout="snackbarTimeout" bottom right)
      v-card(width="100%" :color="snackbarColor" elevation=0)
        v-card-title {{ snackbarTitle }}
        v-card-text {{ snackbarMessage }}
        v-card-actions
          v-btn(:color="snackbarColor" text @click="closeSnackbar") close
    nuxt.container
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data: () => ({
    snackbarTimeout: 2000
  }),
  computed: {
    isDisplayed: {
      get() {
        return this.snackbarStatus
      },
      set(v) {
        this.setStatus(v)
      }
    },
    ...mapGetters('snackbar', [
      'snackbarStatus',
      'snackbarColor',
      'snackbarTitle',
      'snackbarMessage'
    ])
  },
  methods: {
    closeSnackbar() {
      this.setStatus(false)
    },
    ...mapActions('snackbar', ['setStatus'])
  }
}
</script>
