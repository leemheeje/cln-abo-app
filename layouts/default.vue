<template>
  <div class="def-layout">
    <div class="glb-header">
      <Header />
    </div>
    <div class="glb-container">
      <aside class="gl-aside">
        <Aside />
      </aside>
      <div class="gl-contents">
        <div class="inner-section">
          <div class="cont-injt">
            <div class="cnt-tit">
              <span class="c-tit">컨텐츠 등록</span>
              <p class="b-tit">
                계정을 연결해야 구독 가입이 완료되며, 계정 연결 전까지는 구독료가 발생하지 않습니다.<br />
                신청일 이후 40일 내에 계정을 연결해 주세요. 40일이 지나면 자동으로 삭제됩니다.
              </p>
            </div>
            <div class="cnt-bred">
              <Breadcamb />
            </div>
          </div>
          <Nuxt />
        </div>
      </div>
    </div>
    <div class="glb-footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Aside from '~/components/layout/Aside'
import Breadcamb from '~/components/common/Breadcamb'
export default {
  components: {Header, Footer, Aside, Breadcamb}
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/layout/default.scss';
</style>
