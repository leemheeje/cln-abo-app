<template>
  <postCreate />
</template>
<script>
import postCreate from '~/components/page/post-create/'
export const setPageInfo = Object.freeze({
  title: '컨텐츠등록',
  category: [
    {
      path: '/post-create',
      name: '컨텐츠등록'
    }
  ]
})

export default {
  name: 'PostCreate',
  components: {postCreate},
  async asyncData({store, route}) {
    const {fullPath, path, name, query} = route
    await store.dispatch('common/setPageInfo', {
      fullPath,
      path,
      name,
      query,
      ...setPageInfo
    })
  },
  created() {
    if (process.client) {
      console.log('diag - page------')
    }
  }
}
</script>
