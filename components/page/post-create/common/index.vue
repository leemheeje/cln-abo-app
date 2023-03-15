<template>
  <bx-modal
    ref="refPostCreateModal"
    v-model="$parent.visiblePostCreateModal"
    :modal-type="MODAL_TYPE.CONTENTS"
    :hide-header="false"
    v-on="$listeners"
  >
    <template #header-content> {{ modalHeader }} </template>
    <div class="po-post-wrap">
      <div class="po-form-area">
        <slot />
      </div>
      <div class="po-etc-area"></div>
    </div>
  </bx-modal>
</template>
<script>
import BxModal, {MODAL_TYPE} from '~/components/common/BxModal'
export default {
  components: {BxModal},
  props: {
    modalHeader: {type: String, default: '텍스트'}
  },
  data() {
    return {
      MODAL_TYPE
    }
  },
  mounted() {},
  methods: {
    asdfasdfsd() {
      console.log(this)
    }
  }
}
</script>
