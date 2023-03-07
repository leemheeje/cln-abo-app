<template>
  <div class="bx-breadcamb">
    <ul class="bx-bred-lst">
      <li class="tpws first">
        <bx-button class="b-tx">홈</bx-button>
      </li>
      <li v-for="(item, index) in [0, 1, 2, 3]" :key="index" class="tpws">
        <bx-button class="b-tx">마이페이지</bx-button>
      </li>
    </ul>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'

export default {
  components: {BxButton}
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/Breadcamb.scss';
</style>
