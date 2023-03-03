<template>
  <div
    v-if="loading"
    class="bx-loading"
    style="position: absolute; left: 0; top: 0; z-index: 1000; background: gray; width: 100%; height: 100%"
  >
    123123123123123123555555555555
  </div>
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
