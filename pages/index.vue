<template>
  <div>
    <span> asdfasdasfasdfasdfasdfasdfasdfasdfsadfs</span>
    <div>sdf1111111111111111111231111123123123123111</div>
    <div>
      <div>asdf</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
