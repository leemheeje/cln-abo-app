import axios from 'axios'
import _acc from '~/plugins/axios'
import _accaws from '~/plugins/aws-sdk'
export const $axios = () => _acc({$axios: axios})
export const ApiUtil = {
  get: (url) =>
    $axios()
      .get(url)
      .then((data) => data),
  AWS: _accaws(),
  localStorage: {
    getItem: (key) => {
      if (process.client) {
        return JSON.parse(window.localStorage.getItem(key))
      }
    },
    setItem: (key, value) => {
      if (process.client) {
        return window.localStorage.setItem(key, value)
      }
    }
  }
}
