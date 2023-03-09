<template>
  <div class="def-layout">
    <div class="glb-header">
      <Header />
    </div>
    <div class="glb-container">
      <div class="glb-cont-inner">
        <div class="gl-contents">
          <div class="inner-section">
            <div class="cont-injt">
              <div class="cnt-bred">
                <bx-breadcamb :items="getPageInfo.category" />
              </div>
            </div>
            <Nuxt />
          </div>
        </div>
        <aside class="gl-aside">
          <div class="c-tit" @click="_globalMixin">{{ getPageInfo.title }}</div>
          <template v-if="$route.name === 'post-create'"> dsfgsdgsdg123</template>
          <template v-else>
            <bx-button
              class="size-lg outline block primery"
              title="컨텐츠 등록 버튼"
              style="max-width: 75%"
              @click="$router.push({name: 'post-create'})"
            >
              <span class="fs">컨텐츠 등록</span>
            </bx-button>
            <Aside />
          </template>
        </aside>
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
import BxBreadcamb from '~/components/common/BxBreadcamb'
import mixinDefault from '~/mixins/default'
import BxButton from '~/components/common/BxButton'

export default {
  components: {Header, Footer, Aside, BxBreadcamb, BxButton},
  mixins: [mixinDefault]
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/layout/default.scss';
</style>
