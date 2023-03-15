export default {
  computed: {
    getPageInfo() {
      return this.$store.getters['common/getPageInfo']
    },
    getDialogs() {
      return this.$store.getters['common/getDialogs']
    }
  },
  watch: {
    getDialogs() {
      console.log(this.getDialogs)
    }
  },
  head() {
    return {
      title: this.getPageInfo.title
    }
  },
  created() {
    if (process.client) {
      console.log('diag - mixin------')
    }
  },
  mounted() {
    if (process.client) {
      console.log(`mixin----default-----load------`)
      console.log(`this.getPageInfo----------------`, JSON.stringify(this.getPageInfo))
    }
  },
  methods: {
    _removeDialogs(index) {
      console.log('mixins ----- _removeDialogs----', index)
      this.$store.commit('common/removeDialogs', index)
    },
    _globalMixin() {
      console.log(`mixin - method - _globalMixin -------------`)
    }
  }
}
