<template>
  <div class="bx-aside">
    <div class="bx-aside-inner">
      <!-- <ul class="lb-lst">
        <li v-for="(item, index) in [0, 1]" :key="index" class="tps">
          <bx-button class="t-txt" :class="{active: !index}">컨텐츠 등록</bx-button>
        </li>
      </ul> -->
      <!-- 업데이트된 계정목록:S -->
      <div class="up-alst-area">
        <div class="b-tit">업데이트된 계정</div>
        <ul class="u-alst">
          <li
            v-for="(item, index) in [
              {nm: 'ox_zung', nk: '원정맨 WonJeong'},
              {nm: 'txt.bighitent', nk: 'TOMORROW X TOGETHER'},
              {nm: 'official_nct', nk: 'NCT Official'},
              {nm: 'sia_jiwoo', nk: 'sia_jiwoo'},
              {nm: 'straykids_japan', nk: 'straykids_japan'}
            ]"
            :key="index"
            class="tps"
          >
            <bx-button class="t-txt">
              <div class="bc-thumb">
                <img
                  :src="`https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3a777862c25617fb57cf5994c68db496.jpeg?x-expires=1678345200&x-signature=9olWY3kYPIOcOFMQiXVxt0K6oGY%3D`"
                  alt=""
                  class="img"
                />
              </div>
              <div class="b-ti">
                {{ item.nm }}
                <div class="b-n">{{ item.nk }}</div>
              </div>
            </bx-button>
          </li>
        </ul>
      </div>
      <!-- 업데이트된 계정목록:E -->
      <!-- 둘러보기:S -->
      <div class="at-alist-area">
        <div class="b-tit">둘러보기</div>
        <div class="u-alst">
          <bx-tag-group :items="testdata" @click="test">
            <template #default="{item}">
              {{ `${item.code % 2 ? `♬` : `#`} ${item.nm}` }}
            </template>
          </bx-tag-group>
        </div>
      </div>
      <!-- 둘러보기:E -->
    </div>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'
import BxTagGroup from '~/components/common/BxTagGroup'
export default {
  components: {BxButton, BxTagGroup},
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
