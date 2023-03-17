<template>
  <component
    :is="tag"
    class="bx-input-field"
    :data-type="type"
    :class="{
      'is-focus': isFocus,
      'is-error': isError,
      'is-complete': isComplete,
      'visible-clearbtn': isClear && localValue
    }"
  >
    <div class="bx-inner">
      <div class="bx-infar">
        <template v-if="type === 'file'">
          <label :for="id || localId" class="bx-vila">
            <span class="blind">{{ placeholder || title }}</span>
            <div class="bx-vidm">
              {{ localFileValue || `파일을 선택해주세요` }}
            </div>
          </label>
          <input
            :id="id || localId"
            ref="refBxInputField"
            class="bx-inf"
            type="file"
            :name="name"
            :placeholder="placeholder || `파일을 선택해주세요`"
            :title="title"
            :multiple="multiple"
            :accept="accept"
            @change="onChangeFile"
          />
        </template>
        <template v-else>
          <label :for="id || localId" class="blind">{{ placeholder || title }}</label>
          <input
            :id="id || localId"
            ref="refBxInputField"
            class="bx-inf"
            :value="localValue"
            :name="name"
            :type="type"
            :title="title"
            :placeholder="placeholder"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
          />
        </template>
      </div>
      <div class="bx-eto">
        <!-- 내용삭제 버튼:S -->
        <span v-if="isClear && localValue" class="de-btn-ar">
          <button class="de-btn" title="입력내용삭제" @click="handlerClickDeleteButton"></button>
        </span>
        <!-- 내용삭제 버튼:E -->
        <slot name="etc-area" />
      </div>
    </div>
    <div v-if="infoMessage" class="bx-msgs" v-html="infoMessage"></div>
    <slot />
  </component>
</template>

<script>
import {getUUID} from '~/utils/StringUtil'

export const INPUT_FILTER = Object.freeze({
  en: 'en', // 영어+띄어쓰기
  ko: 'ko', // 한글+띄어쓰기
  alpha: 'alpha', // 특수문자+띄어쓰기
  number: 'number', // 숫자+띄어쓰기
  koen: 'koen' // 한글+영어+띄어쓰기
})
export default {
  name: 'BxInputField',
  props: {
    id: {type: String, default: ''},
    name: {type: String, default: ''},
    filter: {type: String, default: ''},
    tag: {type: String, default: 'span'},
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'password', 'number', 'file', 'email'].includes(value)
    },
    multiple: {type: Boolean, default: false},
    accept: {type: String, default: '*'},
    title: {type: String, default: ''},
    placeholder: {type: String, default: ''},
    value: {
      default: ''
      //   validator(value) {
      //     return false
      //   }
    },
    infoMessage: {type: String, default: ''},
    dirFocus: {type: Boolean, default: false}, // 다이렉트 on 포커스
    isClear: {type: Boolean, default: true},
    isComplete: {type: Boolean, default: false},
    isError: {type: Boolean, default: false}
  },
  data() {
    return {
      localValue: '',
      localId: '',
      isFocus: false
    }
  },
  computed: {
    localFileValue() {
      let _localvalue = this.localValue
      if (this.type === 'file') {
        if (typeof _localvalue === 'object') {
          _localvalue = `${_localvalue[0].name} ${(() => {
            if (_localvalue.length > 1) {
              return ` 외 ${_localvalue.length - 1}개 파일`
            } else {
              return ''
            }
          })()}`
        }
      }
      return _localvalue
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        console.log(`value ------ 2`)
        this.localValue = this.handlerFilterSetValue(value)
      }
    },
    dirFocus: {
      immediate: true,
      handler(value) {
        if (value) {
          this.$nextTick(() => {
            this.$refs.refBxInputField?.focus()
          })
        }
      }
    }
  },
  mounted() {
    if (!this.id) {
      this.$nextTick(() => {
        this.localId = getUUID()
      })
    }
  },
  methods: {
    onChangeFile(e) {
      const files = e.target.files
      if (!files.length) return false
      if (this.multiple) {
        this.localValue = files
      } else {
        this.localValue = files[0]?.name
      }
      this.$emit('change', files)
    },
    onInput(e) {
      console.log(`value ------ 1`)
      this.localValue = this.handlerFilterSetValue(this.$refs.refBxInputField?.value)
      this.$refs.refBxInputField.value = this.localValue
      this.$emit('input', this.localValue)
    },
    onChange(e) {
      this.$emit('change', e)
    },
    onFocus(e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    handlerClickDeleteButton(e) {
      this.localValue = ''
      this.$refs.refBxInputField.value = this.localValue
      this.$emit('input', '')
      this.$emit('clickDeleteButton', e)
      console.log(`emit:clickDeleteButton ------------------ ${e}`)
    },
    handlerFilterSetValue(value) {
      let filterValue = value
      switch (this.filter) {
        case INPUT_FILTER.en:
          filterValue = value.replace(/[^a-zA-Z/\s]/g, '')
          break
        case INPUT_FILTER.ko:
          filterValue = value.replace(/[^ㄱ-ㅎㅏ-ㅣ-가-힣/\s]/g, '')
          break
      }
      return filterValue
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxInputField.scss';
</style>
