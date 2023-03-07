<template>
  <bx-button href="/" class="gl-logo" :class="type" title="로고">
    <span class="blind">서비스BI</span>
    <template v-if="type === 'design2'">
      <span class="b">O</span>
      <span class="o">O</span>
      Bab
    </template>
  </bx-button>
</template>

<script>
import BxButton from '~/components/common/BxButton'
export default {
  components: {BxButton},
  props: {
    type: {
      type: String,
      default: 'design1',
      validator: (value) => {
        return ['design1', 'design2'].includes(value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/util.scss';
.gl-logo {
  $height: 40px;
  display: flex;
  height: to-rem($height);
  background: left center no-repeat url('~/static/images/glb-logo.png');
  background-size: $height * 0.7;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding-left: to-rem(30px);
  font-weight: $FONT_WEIGHT_BOLD;
  color: #000;
  font-size: to-rem(20px);
  letter-spacing: to-rem(-0px);
  .b,
  .o {
    color: transparent;
    position: relative;
    font-size: to-rem(18px);
    &:before {
      content: '';
      width: to-rem(9px);
      height: to-rem(9px);
      border: to-rem(2px) solid $COLOR_PRIMERY;
      border-top-color: $COLOR_SECONDARY;
      border-right-color: $COLOR_SECONDARY;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: to-rem(8px);
      border-radius: 50%;
    }
  }
}
</style>
