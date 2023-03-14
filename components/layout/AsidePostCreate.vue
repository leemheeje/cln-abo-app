<template>
  <div class="bx-aside">
    <div class="bx-aside-inner">
      <ul class="lb-lst">
        <li v-for="(item, index) in [0, 1]" :key="index" class="tps">
          <bx-button class="t-txt" :class="{active: !index}">컨텐츠 등록</bx-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'
import BxTagGroup from '~/components/common/BxTagGroup'
export default {
  components: {BxButton},
  data() {
    return {
      testdata: [
        {code: 1, nm: '얼굴합성'},
        {code: 2, nm: '개학'},
        {code: 3, nm: '카툰필터'},
        {code: 4, nm: 'original sound - Mia Mugavero'},
        {code: 5, nm: 'k - spedupaudios ୨♡୧'},
        {code: 6, nm: 'Boys a Liar Pt2 Sped Up - Kuya Magik'}
      ]
    }
  },
  methods: {
    test(item) {
      console.log(item.nm)
    },
    bxTag(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/static/scss/layout/Aside.scss';
</style>
