<template>
  <component :is="tag" class="bx-textarea" :class="{'is-edit': isSmartEditor}">
    <template v-if="!isSmartEditor">
      <textarea class="b-inp" :value="localValue" placeholder="내용을 입력해주세요" @input="onInput" />
    </template>
    <template v-else>
      <client-only>
        <quill-editor
          ref="refTextEditor"
          :options="editorOption"
          :value="localValue"
          class="b-edt"
          @change="onInput"
        ></quill-editor>
      </client-only>
    </template>
  </component>
</template>
<script>
export default {
  components: {},
  props: {
    value: {type: String, default: ''},
    tag: {type: String, default: 'div'},
    isSmartEditor: {type: Boolean, default: false}
  },
  data() {
    return {
      localValue: '',
      content: '',
      editorOption: {
        placeholder: '내용을 입력해주세요'
      }
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
    onInput(e) {
      if (this.isSmartEditor) {
        this.$emit('input', e.html)
      } else {
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxTextarea.scss';
</style>
<style lang="scss">
@import '~/static/scss/util.scss';

.bx-textarea {
  .b-edt {
    .ql-editor {
      min-height: to-rem(200px);
    }
  }
}
</style>
