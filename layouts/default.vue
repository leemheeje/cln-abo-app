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
          <template v-if="$route.name === 'post-create'">
            <AsidePostCreate />
          </template>
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
    <bx-modal
      v-for="({type, message, callback, ...item}, index) in getDialogs"
      :key="index"
      :options="{
        message,
        callback
      }"
      :value="true"
      :modal-type="type"
      v-bind="item"
      @close="_removeDialogs(index)"
    />
  </div>
</template>
<script>
import Header from '~/components/layout/Header'
import Footer from '~/components/layout/Footer'
import Aside from '~/components/layout/Aside'
import AsidePostCreate from '~/components/layout/AsidePostCreate'
import BxBreadcamb from '~/components/common/BxBreadcamb'
import mixinDefault from '~/mixins/default'
import BxButton from '~/components/common/BxButton'
import BxModal from '~/components/common/BxModal'

export default {
  components: {Header, Footer, Aside, AsidePostCreate, BxBreadcamb, BxButton, BxModal},
  mixins: [mixinDefault],
  provide() {
    return {
      getModal: (params) => {
        this.$store.commit('common/setDialogs', params)
      }
    }
  },
  created() {
    if (process.client) {
      console.log('diag - layouts------')
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/layout/default.scss';
</style>
