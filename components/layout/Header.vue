<template>
  <header class="bx-header">
    <div class="bx-header-inner">
      <div class="inner-section">
        <div class="h-logo">
          <bx-logo />
        </div>
        <div class="h-artc-area">
          <div class="h-search-ar">
            <bx-input-field>
              <template #etc-area>
                <bx-button>검색</bx-button>
              </template>
            </bx-input-field>
          </div>
          <bx-button>로그인</bx-button>
          <bx-button>메뉴</bx-button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BxLogo from '~/components/common/BxLogo'
import BxButton from '~/components/common/BxButton'
import BxInputField from '~/components/common/BxInputField'
export default {
  components: {BxLogo, BxButton, BxInputField}
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/layout/Header.scss';
</style>
