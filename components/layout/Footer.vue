<template>
  <footer class="bx-footer" style="display: none">
    <div class="bx-footer-inner">copyright</div>
  </footer>
</template>
<script>
export default {
  fetch() {
    console.log('Footer.vue.fetch ===================', process.server)
  },
  fetchOnServer: false
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/layout/Footer.scss';
</style>
