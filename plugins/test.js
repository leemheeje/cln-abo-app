import Vue from 'vue'
export default (context, inject) => {
  inject('test', context)
  //   console.log(context)
  //   console.log('context.$axios----------------------', context.$axios)
  //   context.$axios.onRequest((config) => {
  //     // config.baseURL = context.$config.api_url
  //     config.baseURL = 'http://dev.uhdc.lguplus.co.kr'
  //   })
}
