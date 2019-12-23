<template lang="pug">
v-app
  TheHeader
  div.wrapper
    nuxt.container
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
