<template>
  <div v-if="loading" class="bx-loading"></div>
</template>

<script>
export default {
  name: 'BxLoading',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      console.log('로딩 스타트??12344444444123???')
      this.loading = true
    },
    finish() {
      console.log('로딩 끝??123124444312312???')
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.bx-loading {
  height: 1px;
  background: #c82333;
  width: 0;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  animation: loading 0.5s ease-in-out;
  z-index: 99;
}
@keyframes loading {
  to {
    width: 100%;
  }
  from {
    width: 0%;
  }
}
</style>
