<template>
  <component :is="tag" class="bx-tag" @click="onClick"><slot /></component>
</template>
<script>
export default {
  props: {
    tag: {type: String, default: 'button'}
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxTag.scss';
</style>
