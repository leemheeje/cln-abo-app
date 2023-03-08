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

export default {
  name: 'PostView',
  components: {BxPost},
  asyncData(context) {
    if (process.client) {
      console.log(`process.env.NODE_ENV -----123-------------!!!!------ ${process.env.NODE_ENV}`)
      console.log(context)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
