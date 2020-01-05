<template lang="pug">
v-app
  TheHeader
  div.wrapper
    v-snackbar(v-model="this.snackbar.status" :color="this.snackbar.color" :timeout="snackbarTimeout" top right)
      v-card(width="100%" :color="this.snackbar.color" elevation=0)
        v-card-title {{ this.snackbar.title }}
        v-card-text {{ this.snackbar.message }}
        //- v-card-actions
        //-   v-btn(color="this.snackbar.color" text @click="") close
    nuxt.container
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '~/components/TheHeader.vue'

export default {
  data: () => ({
    snackbarTimeout: 2000
  }),
  components: {
    TheHeader
  },
  computed: {
    // storeのuserのgetterを展開
    ...mapGetters(['user', 'snackbar'])
  }
}
</script>
