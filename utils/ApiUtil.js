import axios from 'axios'
import _acc from '~/plugins/axios'
export const $axios = () => _acc({$axios: axios})
export const ApiUtil = {
  get: (url) =>
    $axios()
      .get(url)
      .then((data) => data)
}
