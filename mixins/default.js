export default {
  computed: {
    getPageInfo() {
      return this.$store.getters['common/getPageInfo']
    }
  },
  head() {
    return {
      title: this.getPageInfo.title
    }
  },
  mounted() {
    if (process.client) {
      console.log(`mixin----default-----load------`)
      console.log(`this.getPageInfo----------------`, JSON.stringify(this.getPageInfo))
    }
  },
  methods: {
    _globalMixin() {
      console.log(`mixin - method - _globalMixin -------------`)
    }
  }
}
