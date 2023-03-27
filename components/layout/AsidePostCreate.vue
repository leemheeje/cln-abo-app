<template>
  <div class="bx-aside">
    <div class="bx-aside-inner">
      <ul class="lb-lst">
        <li v-for="(item, index) in postCategory" :key="index" class="tps">
          <bx-button class="t-txt">{{ item.content }} 등록</bx-button>
        </li>
      </ul>
      <bx-button class="bx-btn block primery size-lg" @click="onSubmit">저장</bx-button>
    </div>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'
import {apiCategory} from '~/api/post-create/'
export default {
  components: {BxButton},
  data() {
    return {
      postCategory: null
    }
  },
  async fetch() {
    this.postCategory = await apiCategory()
  },
  computed: {
    getPostList() {
      return this.$store.getters['post/create/getPostList']
    }
  },
  fetchOnServer: false,
  methods: {
    test(item) {
      console.log(item.nm)
    },
    bxTag(e) {
      console.log(e)
    },
    onSubmit() {
      console.log(this.$store)
      this.$store.dispatch('post/create/setPostList', this.getPostList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/static/scss/layout/Aside.scss';
</style>
