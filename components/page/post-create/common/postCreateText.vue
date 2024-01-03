<template>
  <div class="in-box">
    <bx-textarea v-model="localValue" is-smart-editor @input="onInput" />
  </div>
</template>
<script>
import BxTextarea from '~/components/common/BxTextarea'
export default {
  components: {BxTextarea},
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {type: String, default: ''}
  },
  data() {
    return {
      localValue: ''
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
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>
