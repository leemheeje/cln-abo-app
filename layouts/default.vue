<template>
  <div class="def-layout">
    <div class="glb-header">
      <Header />
    </div>
    <div class="glb-container">
      <Nuxt />
    </div>
    <div class="glb-footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
export default {
  components: {Header, Footer}
}
</script>
<style lang="scss" scoped>
.def-layout {
  .glb-header {
  }
  .glb-container {
    min-height: 100vh;
  }
}
</style>
