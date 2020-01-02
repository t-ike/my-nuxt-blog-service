<template lang="pug">
v-app
  TheHeader
  div.wrapper
    v-snackbar(v-model="this.snackbar.status" :color="this.snackbar.color" top right)
      v-card(width="100%" :color="this.snackbar.color" elevation=0)
        v-card-title {{ this.snackbar.title }}
        v-card-subtitle {{ this.snackbar.message }}
    nuxt.container
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  computed: {
    // storeのuserのgetterを展開
    ...mapGetters(['user', 'snackbar'])
  }
}
</script>
