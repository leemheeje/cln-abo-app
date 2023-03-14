<template>
  <div class="page-post-create">
    <button @click="getModal">tsssssss</button>
    <bx-modal v-model="isModalVisible" :modal-type="MODAL_TYPE.CONFIRM" @close:before="onCloseBefore" @close="onClose"
      >content</bx-modal
    >
    <ul class="cro-lst">
      {{
        isModalVisible
      }}
      <!-- foreach:S -->
      <li v-for="(item, index) in [0, 0, 0, 0, 0]" :key="index" class="cr-item">
        <div class="opt-area">
          <bx-button class="op-btn" title="설정버튼" @click="isModalVisible = !isModalVisible">
            <bx-icon icon="gear-fill" title="설정아이콘" />
          </bx-button>
        </div>
        <div class="ite-box">
          <img src="" alt="" />
        </div>
      </li>
      <!-- foreach:E -->
    </ul>
  </div>
</template>
<script>
import BxButton from '~/components/common/BxButton'
import BxIcon from '~/components/common/BxIcon'
import BxModal, {BUTTON_TYPE, MODAL_TYPE} from '~/components/common/BxModal'

export default {
  name: 'PostCreate',
  components: {BxButton, BxIcon, BxModal},
  inject: ['getModal'],
  data() {
    return {
      MODAL_TYPE,
      isModalVisible: false
    }
  },
  watch: {
    isModalVisible() {
      console.log(BUTTON_TYPE)
    }
  },
  mounted() {},
  methods: {
    onClose(params) {
      console.log('parent-----------------', params)
    },
    onCloseBefore(params) {
      switch (params) {
        case BUTTON_TYPE.CONFIRM:
          console.log('오케이버튼오케이버튼오케이버튼오케이버튼')
          break
        case BUTTON_TYPE.CANCEL:
          console.log('취소버튼취소버튼취소버튼취소버튼취소버튼')
          break
      }
    }
  }
}
</script>
