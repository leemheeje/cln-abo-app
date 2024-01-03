<template>
  <header class="bx-header">
    <div class="bx-header-inner">
      <div class="inner-section">
        <div class="h-logo">
          <bx-logo />
        </div>
        <div class="h-artc-area">
          <div class="h-search-ar">
            <!-- 검색바 영역:S -->
            <bx-input-field class="size-sm h-sea-inf" placeholder="검색어를 입력해주세요">
              <template #etc-area>
                <bx-button class="h-sea-bt" title="검색하기 버튼">
                  <bx-icon icon="search" title="검색하기 아이콘" />
                </bx-button>
              </template>
            </bx-input-field>
            <!-- 검색바 영역:E -->
          </div>
          <bx-button class="size-xsm primery h-et-btic" title="로그인 버튼">
            <bx-icon class="ic" icon="person-circle" title="로그인 아이콘" />
            <span class="fs">로그인</span>
          </bx-button>
          <bx-button class="size-xsm secondary h-et-btic" title="회원가입 버튼">
            <bx-icon class="ic" icon="people-fill" title="회원가입 아이콘" />
            <span class="fs">회원가입</span>
          </bx-button>
          <!-- <bx-button class="size-xsm secondary h-et-btic" title="로그아웃 버튼">
            <bx-icon class="ic" icon="person-dash-fill" title="로그아웃 아이콘" />
            <span class="fs">로그아웃</span>
          </bx-button>
          <bx-button class="size-xsm info h-et-btic" title="마이페이지 버튼">
            <bx-icon class="ic" icon="person-lines-fill" title="마이페이지 아이콘" />
            <span class="fs">마이페이지</span>
          </bx-button> -->
          <bx-button class="h-et-atic" title="메뉴 버튼">
            <bx-icon class="ic" icon="list-nested" title="메뉴 아이콘" />
          </bx-button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BxLogo from '~/components/common/BxLogo'
import BxButton from '~/components/common/BxButton'
import BxInputField from '~/components/common/BxInputField'
import BxIcon from '~/components/common/BxIcon'
export default {
  components: {BxLogo, BxButton, BxInputField, BxIcon},
  fetch() {
    console.log('Header.vue.fetch ===================', process.server)
  },
  fetchOnServer: false
}
</script>
<style lang="scss">
@import '~/static/scss/layout/Header.scss';
</style>
