<template>
  <div class="bx-aside">
    <div class="bx-aside-inner">
      <ul class="lb-lst">
        <li v-for="(item, index) in postCategory" :key="index" class="tps">
          <bx-button class="t-txt" @click="onAddPostList(item.value)">{{ item.content }} 등록</bx-button>
        </li>
      </ul>
      <bx-button class="bx-btn block primery size-lg" @click="onSubmit">저장</bx-button>
    </div>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'
import {apiCategory} from '~/api/post-create/'
import {POST_CATEGORY} from '~/components/page/post-create/'
import {getUnqID} from '~/utils/StringUtil'
/**
 * {post_type: 'text', // text||image
      content: ''}
*/
export default {
  components: {BxButton},
  data() {
    return {
      postCategory: null,
      POST_CATEGORY
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
    onAddPostList(value) {
      this.$store.commit('post/create/setPostList', {
        code: getUnqID('POST_ITEM'),
        postType: value,
        content: ''
      })
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
