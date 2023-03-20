import https from 'https'
export default ({$axios}) => {
  // self signed certificate in certificate chain error
  $axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false})
  $axios.defaults.baseURL = process.env.VUE_APP_API_URL
  //   console.log('context.$axios-----------------------', $axios)
}
