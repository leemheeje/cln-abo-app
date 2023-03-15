<template>
  <div class="page-post-create">
    <button @click="onGetModalAlert">getModal-alert</button><br />
    <button @click="onGetModalConfirm">getModal-confirm</button><br />
    <button @click="onGetModalContent">getModal-content</button><br /><br />
    <button @click="isModalVisible = true">bxModal - isModalVisible</button><br /><br />
    <bx-modal v-model="isModalVisible" :modal-type="MODAL_TYPE.CONFIRM" @close:before="onCloseBefore" @close="onClose"
      >content</bx-modal
    >
  </div>
</template>
<script>
import BxModal, {BUTTON_TYPE, MODAL_TYPE} from '~/components/common/BxModal'

export default {
  name: 'PostCreate',
  components: {BxModal},
  inject: ['getModal'],
  data() {
    return {
      MODAL_TYPE,
      BUTTON_TYPE,
      isModalVisible: false
    }
  },
  watch: {
    isModalVisible() {
      console.log(this.BUTTON_TYPE)
    }
  },
  mounted() {},
  methods: {
    onGetModalAlert() {
      this.getModal('getModal-alert')
    },
    onGetModalConfirm() {
      this.getModal({
        type: this.MODAL_TYPE.CONFIRM,
        message: 'getModal-confirm',
        callback: (button) => {
          if (button === this.BUTTON_TYPE.CONFIRM) {
            alert('확인버튼클릭')
          } else if (button === this.BUTTON_TYPE.CANCEL) {
            alert('취소버튼클릭')
          }
        }
      })
    },
    onGetModalContent() {
      this.getModal({
        type: this.MODAL_TYPE.CONTENTS,
        message: '<div style="color:red;">content</div>'
      })
    },
    onClose(params) {
      console.log('parent-----------------', params)
    },
    onCloseBefore(params) {
      switch (params) {
        case BUTTON_TYPE.CONFIRM:
          alert('오케이버튼오케이버튼오케이버튼오케이버튼')
          break
        case BUTTON_TYPE.CANCEL:
          alert('취소버튼취소버튼취소버튼취소버튼취소버튼')
          break
      }
    }
  }
}
</script>
