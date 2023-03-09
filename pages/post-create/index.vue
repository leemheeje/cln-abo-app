<template>
  <div class="page-post-create">asdfasdasdfsdfasdffsasdfdfsdfsdfsdfsa</div>
</template>
<script>
import _cloneDeep from 'lodash/cloneDeep'

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
  components: {},
  async asyncData({store, route}) {
    const {fullPath, path, name, query} = route
    await store.dispatch('common/setPageInfo', {
      fullPath,
      path,
      name,
      query,
      ...setPageInfo
    })
  }
}
</script>
