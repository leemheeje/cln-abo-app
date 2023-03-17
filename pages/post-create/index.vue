<template>
  <div>
    <postCreate />
    <div v-for="(item, index) in dataaa" :key="index">{{ item.jncoProdCd }}</div>
  </div>
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
  async asyncData(context) {
    // const {fullPath, path, name, query} = route
    // await store.dispatch('common/setPageInfo', {
    //   fullPath,
    //   path,
    //   name,
    //   query,
    //   ...setPageInfo
    // })
    // console.log(context)
    const dataaa = await context.$axios
      .$get('/uhdc/fo/pogg/main/v1/display-prod-list?category=1002&pcMblCd=P&pageNo=1&rowSize=100')
      .then(({sppsFoDtoList}) => sppsFoDtoList)
    return {
      dataaa
    }
  },
  created() {
    if (process.client) {
      console.log('diag - page------', this.dataaa)
    }
  }
}
</script>
