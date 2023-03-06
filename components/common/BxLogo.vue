<template>
  <bx-button href="/" :class-name="['gl-logo']" title="로고">
    <span class="blind">서비스BI</span>
    <span class="b">6</span>
    <span class="o">O</span>
    Bab
  </bx-button>
</template>
<script>
import BxButton from '~/components/common/BxButton'
export default {
  components: {BxButton}
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
  padding-left: to-rem(32px);
  font-weight: $FONT_WEIGHT_BOLD;
  color: #000;
  font-size: to-rem(21px);
  letter-spacing: to-rem(-0.4px);
  .b {
    color: $COLOR_SECOND;
  }
  .o {
    color: transparent;
    position: relative;
    &:before {
      content: '';
      width: to-rem(7px);
      height: to-rem(7px);
      border: to-rem(4px) solid $COLOR_PRIMERY;
      border-left-color: $COLOR_SECOND;
      border-bottom-color: $COLOR_SECOND;
      position: absolute;
      left: to-rem(1px);
      top: to-rem(8px);
      border-radius: 50%;
    }
  }
}
</style>
