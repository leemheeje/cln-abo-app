<template>
  <div class="page-post-create">
    <ul class="cro-lst">
      <!-- foreach:S -->
      <li v-for="(item, index) in list" :key="index" class="cr-item">
        <div class="opt-area">
          <bx-button class="op-btn" title="설정버튼" @click="onPostCreate">
            <bx-icon icon="gear-fill" title="설정아이콘" />
          </bx-button>
        </div>
        <div class="ite-box">
          {{ item.todo }}
          <img src="" alt="" />
        </div>
      </li>
      <!-- foreach:E -->
    </ul>
    <post-create-modals v-model="visiblePostCreateModal" modal-header="이미지 등록/수정" @close:before="onSubmit">
      <!-- 포스트 : 텍스트 등록 :S -->
      <post-create-text v-if="false" v-model="dataPostText" />
      <!-- 포스트 : 텍스트 등록 :E -->
      <!-- 포스트 : 이미지 등록 :S -->
      <post-create-image v-if="true" v-model="dataPostImage" />
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

export default {
  name: 'PostCreate',
  components: {BxButton, BxIcon, PostCreateModals, postCreateText, postCreateImage},
  inject: ['getModal'],
  props: {
    list: {type: Array, default: () => []}
  },
  data() {
    return {
      MODAL_TYPE,
      BUTTON_TYPE,
      visiblePostCreateModal: false,
      dataPostImage: ['http://www.tcpschool.com/img/logo.png'],
      dataPostText: '데이터 텍스트로 가기'
    }
  },
  watch: {
    isModalVisible() {
      console.log(this.BUTTON_TYPE)
    }
  },
  created() {
    if (process.client) {
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_API_URL)
    }
  },
  mounted() {},
  methods: {
    onSubmit(params) {
      if (params === this.BUTTON_TYPE.CONFIRM) {
        console.log(`
	  /*********** 등록 팝업 확인버튼 components/page/post-create/index *********/
	  ${this.dataPostImage} ${this.dataPostText}
	  /**********************************************************/
	  `)
      }
    },
    onPostCreate() {
      this.visiblePostCreateModal = true
    }
  }
}
</script>
