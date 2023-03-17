import Vue from 'vue'

export default (context, inject) => {
  inject('test', context)
  context.$axios.onRequest((config) => {
    // config.baseURL = context.$config.api_url
    config.baseURL = 'http://dev.uhdc.lguplus.co.kr'
  })
}
