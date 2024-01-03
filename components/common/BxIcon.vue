<template>
  <client-only>
    <b-icon class="bx-icon" :class="className[0]" :icon="icon" :font-scale="fontScale" :title="title">
      <slot />
    </b-icon>
  </client-only>
</template>
<script>
export default {
  props: {
    className: {type: Array, default: () => ['']},
    fontScale: {type: String, default: '1'},
    title: {type: String, default: 'icon'},
    icon: {type: String, default: 'search', required: true}
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxIcon.scss';
</style>
