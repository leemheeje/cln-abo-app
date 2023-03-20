// require('dotenv').config()
export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'src',
    htmlAttrs: {
      lang: 'ko'
    },
    // eslint-disable-next-line prettier/prettier
    meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        charset: 'utf-8'
      }
    ],
    link: []
  },
  loading: '~/components/common/BxLoading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/scss/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/test',
    '~/plugins/axios',
    {
      src: '~/plugins/bootstrap',
      mode: 'client'
    },
    {src: '~/plugins/quill-editor', mode: 'client'}
  ],
  bootstrapVue: {
    bootstrapCSS: false
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/dotenv',
    [
      '@nuxtjs/dotenv',
      {
        path: './config/env',
        filename: `.env.${process.env.NODE_ENV}`
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://dev.uhdc.lguplus.co.kr'
    // baseURL: process.env.VUE_APP_API_URL
    baseURL: '/'
  },
  //   env: {
  //     LEEM_HEE: 'https://dummyjson.com'
  //   },

  publicRuntimeConfig: {
    // 클라이언트나 서버나 어느 곳에서도 사용 가능한 값들
    // context > $config > api_url
    // api_url: process.env.VUE_APP_API_URL --> process.env 왜 안됌???
  },
  privateRuntimeConfig: {
    // 클라이언트나 서버나 어느 곳에서도 사용 가능한 값들
    // api_url: process.env.VUE_APP_API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
console.log('/**********************************************************************************************')
console.log('process.env.NODE_ENV-------------', process.env.NODE_ENV)
console.log('process.env.LEEM_HEE-------------', process.env.LEEM_HEE)
console.log('process.env.VUE_APP_STATIC_URL-------------', process.env.VUE_APP_STATIC_URL)
console.log('process.env.VUE_APP_API_URL-------------', process.env.VUE_APP_API_URL)
console.log('/**********************************************************************************************')
