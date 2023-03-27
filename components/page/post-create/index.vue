<template>
  <div class="page-post-create">
    <!-- <input type="file" multiple @change="test" />
    <img v-for="(item, index) in isFileupload" :key="index" :src="item.Location" alt="" /> -->
    <ul class="cro-lst">
      <!-- foreach:S -->
      {{
        localList
      }}
      <li v-for="(item, index) in localList" :key="index" class="cr-item">
        <div class="opt-area">
          <bx-button class="op-btn" title="설정버튼" @click="onPostCreate(item.post_type)">
            <bx-icon icon="gear-fill" title="설정아이콘" />
          </bx-button>
        </div>
        <div class="ite-box">
          <template v-if="item.post_type === POST_CATEGORY.TEXT">
            <div v-html="item.content" />
          </template>
          <template v-if="item.post_type === POST_CATEGORY.IMAGE">
            <img v-for="(img, i) in item.content" :key="i" :src="img.Location" :alt="img.key" />
          </template>
        </div>
      </li>
      <!-- foreach:E -->
    </ul>
    <post-create-modals v-model="visiblePostCreateModal" modal-header="이미지 등록/수정" @close:before="onSubmit">
      <!-- 포스트 : 텍스트 등록 :S -->
      <post-create-text v-if="createModalOpenType === POST_CATEGORY.TEXT" v-model="dataPostText" />
      <!-- 포스트 : 텍스트 등록 :E -->
      <!-- 포스트 : 이미지 등록 :S -->
      <post-create-image v-if="createModalOpenType === POST_CATEGORY.IMAGE" v-model="dataPostImage" />
      <!-- 포스트 : 이미지 등록 :E -->
    </post-create-modals>
  </div>
</template>
<script>
import BxButton from '~/components/common/BxButton'
import BxIcon from '~/components/common/BxIcon'
import {BUTTON_TYPE, MODAL_TYPE} from '~/components/common/BxModal'
import PostCreateModals from '~/components/page/post-create/common/'
import postCreateText from '~/components/page/post-create/common/postCreateText'
import postCreateImage from '~/components/page/post-create/common/postCreateImage'
import {apiText} from '~/api/post-create/'
import {fileUpload} from '~/api/'
import {cloneDeep} from '~/utils/StringUtil'

export const POST_CATEGORY = Object.freeze({
  TEXT: 'text',
  IMAGE: 'image'
})
export default {
  name: 'PostCreate',
  components: {BxButton, BxIcon, PostCreateModals, postCreateText, postCreateImage},
  inject: ['getModal'],
  props: {
    // list: {type: Array, default: () => []}
  },
  data() {
    return {
      MODAL_TYPE,
      BUTTON_TYPE,
      POST_CATEGORY,
      visiblePostCreateModal: false,
      dataPostImage: null,
      dataPostText: '데이터 텍스트로 가기',
      localList: null,
      createModalOpenType: '',
      isFileupload: null
    }
  },
  computed: {
    getPostList() {
      return this.$store.getters['post/create/getPostList']
    }
  },
  watch: {
    // list: {
    //   immediate: true,
    //   handler(value) {
    //     this.localList = value
    //   }
    // },
    getPostList: {
      immediate: true,
      handler(value) {
        this.localList = value
        console.log(this.localList)
      }
    },
    isModalVisible() {
      console.log(this.BUTTON_TYPE)
    }
  },
  created() {
    if (process.client) {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_API_URL)
      console.log('diag - page------')
    }
  },
  mounted() {},
  methods: {
    async test(e) {
      if (!e.target.value) return false
      //   await console.log(e.target.files)
      //   const files = Array.from(e.target.files)
      //   console.log(files)
      this.isFileupload = await fileUpload({
        Body: e.target.files
      })
      console.log('isFileuploadisFileuploadisFileuploadisFileuploadisFileupload', this.isFileupload)
    },
    async onSubmit(params) {
      if (params === this.BUTTON_TYPE.CONFIRM) {
        console.log(`
	  /*********** 등록 팝업 확인버튼 components/page/post-create/index *********/
	  ${this.dataPostImage} ${this.dataPostText}
	  /**********************************************************/
	  `)
        const localData = cloneDeep(this.localList)
        switch (this.createModalOpenType) {
          case this.POST_CATEGORY.TEXT:
            localData[0].content = this.dataPostText
            break
          case this.POST_CATEGORY.IMAGE: // 일단 직접삽입 ㅠㅠ dynamoDB연결
            localData[1].content = await fileUpload({
              Body: this.dataPostImage
            })
            // localData[1].content = await '이미지등록되'
            break
        }
        this.$store.commit('post/create/setPostList', localData)
      }
    },
    onPostCreate(type) {
      this.visiblePostCreateModal = true
      this.createModalOpenType = type
    }
  }
}
</script>
