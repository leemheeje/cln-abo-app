<template>
  <button v-if="!href" :id="id || localId" class="bx-button" :title="title" :name="name" @click="onClick">
    <slot />
  </button>
  <a v-else :href="href" :target="target" class="bx-link" :title="title" :name="name">
    <slot />
  </a>
</template>
<script>
import {getUUID} from '~/utils/StringUtil'
export default {
  props: {
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
