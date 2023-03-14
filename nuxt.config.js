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
    {
      src: '~/plugins/bootstrap',
      client: true
    }
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
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
