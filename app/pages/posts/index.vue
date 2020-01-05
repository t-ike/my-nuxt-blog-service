<template lang="pug">
    section
        v-card.elevation-3(width="100%")
            v-card-title 新着投稿
            v-divider
            v-data-table(
                :headers="headers"
                :items="showPosts"
                @click:row="handleClick"
                hide-default-footer
            ).pa-3

</template>

<script>
import { mapGetters } from 'vuex'
import moment from '~/plugins/moment'

export default {
  async asyncData({ store }) {
    await store.dispatch('posts/fetchPosts')
  },
  data() {
    return {
      headers: [
        {
          text: 'タイトル',
          align: 'left',
          value: 'title',
          width: '60%'
        },
        {
          text: '投稿者',
          value: 'user_id'
        },
        {
          text: '投稿日時',
          value: 'created_at'
        }
      ]
    }
  },
  computed: {
    showPosts() {
      return this.posts.map((post) => {
        console.log(post.createdAt)
        post = {
          id: post.id,
          user_id: post.user.id,
          title: post.title,
          body: post.body,
          created_at: moment(post.createdAt).format('YYYY/MM/DD HH:mm:ss')
        }
        return post
      })
    },
    ...mapGetters('posts', ['posts'])
  },
  methods: {
    handleClick(post) {
      this.$router.push(`/posts/${post.id}`)
    }
  }
}
// export default {
//   data() {
//     return {
//       headers: [
//         {
//           text: 'タイトル',
//           align: 'left',
//           value: 'title',
//           width: '60%'
//         },
//         {
//           text: '投稿者',
//           value: 'id'
//         },
//         {
//           text: '投稿日時',
//           value: 'created_at'
//         }
//       ],
//       posts: [
//         {
//           id: '001',
//           title: 'Title1',
//           body: 'aa ii uu',
//           created_at: '2018/12/22 12:00:00'
//         },
//         {
//           id: '002',
//           title: 'Title2',
//           body: 'aa ii uu',
//           created_at: '2019/01/22 13:00:00'
//         }
//       ]
//     }
//   }
// }
</script>
