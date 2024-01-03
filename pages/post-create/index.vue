<template>
  <div>
    <postCreate />
  </div>
</template>
<script>
import postCreate from '~/components/page/post-create/'
import {ApiUtil} from '~/utils/ApiUtil'
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
  },
  fetchOnServer: false,
  async fetch() {
    await this.$store.dispatch('post/create/setPostList', ApiUtil.localStorage.getItem('post-list') || [])
  },
  created() {
    if (process.client) {
      console.log('diag - pages------', this.list)
    }
  }
}
</script>
