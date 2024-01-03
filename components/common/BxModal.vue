<template>
  <client-only>
    <b-modal
      ref="refBxModal"
      v-model="localValue"
      :hide-header="hideHeader"
      :hide-footer="hideFooter"
      :centered="centered"
      :no-close-on-esc="noCloseOnEsc"
      :no-fade="noFade"
      @change="onModalClose"
    >
      <template #modal-title>
        <slot name="header-content" />
      </template>
      <template #default>
        <template v-if="getOptionsMessage">
          <div class="ins-modal" v-html="getOptionsMessage" />
        </template>
        <template v-else>
          <div class="ins-modal">
            <slot />
          </div>
        </template>
      </template>
      <template #modal-footer>
        <template v-if="modalType === MODAL_TYPE.ALERT">
          <bx-button class="primery size-sm" @click="onModalClose(BUTTON_TYPE.CONFIRM)">확인</bx-button>
        </template>
        <template v-if="modalType === MODAL_TYPE.CONFIRM || modalType === MODAL_TYPE.CONTENTS">
          <bx-button class="secondary size-sm" @click="onModalClose(BUTTON_TYPE.CANCEL)">취소</bx-button>
          <bx-button class="primery size-sm" @click="onModalClose(BUTTON_TYPE.CONFIRM)">확인</bx-button>
        </template>
      </template>
    </b-modal>
  </client-only>
</template>
<script>
import BxButton from '~/components/common/BxButton'

export const BUTTON_TYPE = Object.freeze({
  CONFIRM: 'CONFIRM',
  CANCEL: 'CANCEL'
})
export const MODAL_TYPE = Object.freeze({
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM',
  PROMPT: 'PROMPT',
  CONTENTS: 'CONTENTS'
})
export default {
  components: {BxButton},
  model: {
    prop: 'value',
    event: 'close'
  },
  props: {
    modalType: {
      type: String,
      default: MODAL_TYPE.ALERT,
      validator: (value) => Object.values(MODAL_TYPE).includes(value)
    },
    options: {
      type: [Object, String],
      default: () => ({
        type: MODAL_TYPE.ALERT,
        message: ''
      })
    },
    value: {type: Boolean, default: false},
    centered: {type: Boolean, default: true},
    noCloseOnEsc: {type: Boolean, default: true},
    noFade: {type: Boolean, default: true},
    hideHeader: {type: Boolean, default: true},
    hideFooter: {type: Boolean, default: false}
  },
  data() {
    return {
      MODAL_TYPE,
      BUTTON_TYPE,
      localValue: false
    }
  },
  computed: {
    getOptionsMessage() {
      //* * $store/common/setDialogs 에서 타입처리
      //   const opt = this.options
      //   let _v = null
      //   if (typeof opt === 'string') {
      //     _v = this.options
      //   } else if (typeof opt === 'object') {
      //     _v =
      //   }
      return this.options.message
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.localValue = value
      }
    }
  },
  mounted() {
    console.log(this.options)
  },
  methods: {
    onModalClose(params) {
      const opt = this.options
      if (typeof opt.callback === 'function') {
        opt.callback(params)
      }
      this.$emit('close:before', params)
      console.log('close button--------------------')
      this.$emit('close', false)
    }
  }
}
</script>
