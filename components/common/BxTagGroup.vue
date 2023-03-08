<template>
  <div class="bx-tag-group" :class="className[0]">
    <div v-for="(item, index) in items" :key="index" class="btg-blst" :class="className[1]">
      <bx-tag v-bind="$attrs" @click="onClick(item)"><slot :item="item" /></bx-tag>
    </div>
  </div>
</template>
<script>
import BxTag from '~/components/common/BxTag'
export default {
  components: {BxTag},
  inheritAttrs: false,
  props: {
    items: {type: Array, default: () => []},
    className: {type: Array, default: () => ['', '']}
  },
  mounted() {
    console.log(`-000000000000000000000000000000000000000000000`, this)
  },
  methods: {
    onClick(item) {
      this.$emit('click', item)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/util.scss';
.bx-tag-group {
  display: block;
  margin-top: to-rem(-5px);
  .btg-blst {
    display: inline-flex;
    margin-top: to-rem(5px);
    margin-right: to-rem(5px);
  }
}
</style>
