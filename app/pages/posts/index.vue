<template lang="pug">
    section.container
        v-card.elevation-3(width="100%")
            v-card-title 新着投稿
            v-divider
            v-data-table(
                :headers="headers"
                :items="posts"
                hide-default-footer
            ).pa-3

</template>

<script>
export default {
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
          value: 'id'
        },
        {
          text: '投稿日時',
          value: 'created_at'
        }
      ],
      posts: [
        {
          id: '001',
          title: 'Title1',
          body: 'aa ii uu',
          created_at: '2018/12/22 12:00:00'
        },
        {
          id: '002',
          title: 'Title2',
          body: 'aa ii uu',
          created_at: '2019/01/22 13:00:00'
        }
      ]
    }
  }
}
</script>
