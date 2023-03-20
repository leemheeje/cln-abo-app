import https from 'https'
// axios config 설정
export default ({$axios}) => {
  // self signed certificate in certificate chain error
  $axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false})
  $axios.defaults.baseURL = process.env.VUE_APP_API_URL
  //   console.log('context.$axios-----------------------', $axios)
  return $axios
}
