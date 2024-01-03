<template>
  <div class="bx-breadcamb">
    <ul class="bx-bred-lst">
      <li class="tpws">
        <bx-button class="b-tx" @click="$router.push('/')">홈</bx-button>
      </li>
      <template v-if="isItemsTypeArray">
        <li v-for="({path, name}, index) in items" :key="index" class="tpws" :class="{first: !index}">
          <bx-button v-if="!useSlot" class="b-tx" @click="$router.push(path)">
            {{ name }}
          </bx-button>
          <slot v-else v-bind="{path, name}" />
        </li>
      </template>
      <template v-else>
        <li class="tpws">
          <bx-button class="b-tx">{{ items }}</bx-button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import BxButton from '~/components/common/BxButton'

export default {
  components: {BxButton},
  props: {
    items: {type: [String, Array], default: () => []},
    useSlot: {type: Boolean, default: false}
  },
  computed: {
    isItemsTypeArray() {
      return Array.isArray(this.items)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/static/scss/common/BxBreadcamb.scss';
</style>
