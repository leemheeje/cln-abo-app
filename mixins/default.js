export default {
  data() {
    return {
      dialogs: []
    }
  },
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
    _globalMixin() {
      console.log(`mixin - method - _globalMixin -------------`)
    }
  }
}
