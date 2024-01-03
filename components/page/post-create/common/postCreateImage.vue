<template>
  <div class="in-box">
    {{ localImageURL }}
    <img v-for="(item, index) in localImageURL" :key="index" :src="item" style="max-width: 100%" />
    <bx-input-field v-model="localValue" title="이미지등록수정" :multiple="true" type="file" @change="onChange" />
  </div>
</template>
<script>
import BxInputField from '~/components/common/BxInputField'
import {fileValidator, fileReader} from '~/utils/ObjectUtil'
import {isObject} from '~/utils/StringUtil'
export default {
  components: {BxInputField},
  inject: ['getModal'],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {default: ''}
  },
  data() {
    return {
      localValue: '',
      localImageURL: ''
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        if (value) {
          this.localValue = value
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const files = this.localValue
      this.onFileReader(files)
    })
  },
  methods: {
    onChange(files) {
      const validator = fileValidator(files, {type: 'image', maxsize: 4000000})
      console.log(validator)
      if (!validator) {
        this.getModal('타입 및 용량 유효성')
        this.localValue = ''
        return false
      }
      this.onFileReader(files)
      this.$emit('change', files)
    },
    async onFileReader(files) {
      const array = []
      for (let i = 0; i < files.length; i++) {
        if (isObject(files[i])) {
          array.push(await fileReader(files[i]))
        } else {
          array.push(files[i])
        }
      }
      this.localImageURL = array
    }
  }
}
</script>
