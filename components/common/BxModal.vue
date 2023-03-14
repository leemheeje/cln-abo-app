<template>
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
      <slot />
      {{ modalType }}
    </template>
    <template #modal-footer>
      <template v-if="modalType === MODAL_TYPE.ALERT">
        <button @click="onModalClose(BUTTON_TYPE.CONFIRM)">ok</button>
      </template>
      <template v-if="modalType === MODAL_TYPE.CONFIRM">
        <button @click="onModalClose(BUTTON_TYPE.CONFIRM)">ok</button>
        <button @click="onModalClose(BUTTON_TYPE.CANCEL)">CANCEL</button>
      </template>
    </template>
  </b-modal>
</template>
<script>
export const BUTTON_TYPE = Object.freeze({
  CONFIRM: 'CONFIRM',
  CANCEL: 'CANCEL'
})
export const MODAL_TYPE = Object.freeze({
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM',
  PROMPT: 'PROMPT'
})
export default {
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
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.localValue = value
      }
    }
  },
  methods: {
    onModalClose(params) {
      this.$emit('close:before', params)
      console.log('close button--------------------')
      this.$emit('close', false)
    }
  }
}
</script>
