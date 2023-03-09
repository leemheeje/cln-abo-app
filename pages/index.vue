<template>
  <div class="page-post-view">
    <bx-post
      v-for="(item, index) in [0, 0]"
      :key="index"
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
export const setPageInfo = Object.freeze({
  title: 'Main'
})
export default {
  name: 'PostView',
  components: {BxPost},
  async asyncData({store}) {
    await store.commit('common/setPageInfo', setPageInfo)
  },
  fetch(context) {
    console.log('pages/.fetch ===================', process.server)
    console.log(123)
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
