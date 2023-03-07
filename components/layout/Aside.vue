<template>
  <div class="bx-aside">
    <div class="bx-aside-inner">
      <ul class="lb-lst">
        <li v-for="(item, index) in [0, 1, 2, 3]" :key="index" class="tps">
          <bx-button class="t-txt" :class="{active: !index}">컨텐츠 등록</bx-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'
export default {
  components: {BxButton}
}
</script>

<style lang="scss" scoped>
@import '~/static/scss/layout/Aside.scss';
</style>
