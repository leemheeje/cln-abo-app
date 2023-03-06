<template>
  <component :is="tag" v-if="!href" class="bx-button" :class="className[0]">
    <button :id="id || localId" class="b-btn" :class="className[1]" :title="title" :name="name" @click="onClick">
      <slot />
    </button>
  </component>
  <a v-else :href="href" :target="target" class="bx-link" :class="className[0]" :title="title" :name="name">
    <slot />
  </a>
</template>
<script>
import {getUUID} from '~/utils/StringUtil'
export default {
  props: {
    className: {type: Array, default: () => ['', '']},
    id: {type: String, default: ''},
    tag: {type: String, default: 'span'},
    title: {type: String, default: ''},
    name: {type: String, default: ''},
    target: {type: String, default: ''},
    href: {type: String, default: ''}
  },
  data() {
    return {
      localId: ''
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
    onClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxButton.scss';
</style>
