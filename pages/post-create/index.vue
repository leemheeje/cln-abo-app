<template>
  <div>
    <postCreate :list="list" />
  </div>
</template>
<script>
import postCreate from '~/components/page/post-create/'
import {apiText} from '~/api/post-create/'
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
  async asyncData({route, store, ...context}) {
    const {fullPath, path, name, query} = route
    await store.dispatch('common/setPageInfo', {
      fullPath,
      path,
      name,
      query,
      ...setPageInfo
    })
    const list = await apiText()
    return {
      list
    }
  },
  created() {
    if (process.client) {
      console.log('diag - page------', this.list)
    }
  }
}
</script>
