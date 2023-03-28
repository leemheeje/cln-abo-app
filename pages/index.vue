<template>
  <div class="page-post-view">
    <bx-post
      v-for="(item, index) in localList"
      :key="index"
      :post-type="item.postType"
      :content="item.content"
      :style="
        index
          ? {
              marginTop: '50px'
            }
          : ''
      "
    />
  </div>
</template>

<script>
import BxPost from '~/components/common/BxPost'
import {ApiUtil} from '~/utils/ApiUtil'
export const setPageInfo = Object.freeze({
  title: 'Main'
})
export default {
  name: 'PostView',
  components: {BxPost},
  async asyncData({store}) {
    await store.commit('common/setPageInfo', setPageInfo)
  },
  async fetch() {
    console.log('pages/.fetch ===================', process.server)
    console.log(123)
    // console.log('this.$store--------', context)
    await this.$store.dispatch('post/create/setPostList', ApiUtil.localStorage.getItem('post-list') || [])
  },
  computed: {
    localList() {
      return this.$store.getters['post/create/getPostList']
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  fetchOnServer: false
}
</script>
