import {KAKAO_APP_TOKEN} from '~/config/develop_kakao'

export const state = () => ({
  isAuth: false,
  kakaoToken: '',
  userNm: '',
  userEmail: '',
  userJender: '',
  userThumbnail: ''
})
export const getters = {
  isAuth(state) {
    return state.isAuth
  },
  getUserNm(state) {
    return state.userNm
  },
  getKakaoToken(state) {
    return state.kakaoToken
  }
}
export const mutations = {
  setIsAuth(state, payload) {
    state.isAuth = payload
  },
  setKakaoToken(state, payload) {
    state.kakaoToken = payload
  },
  setUserNm(state, payload) {
    state.userNm = payload
  },
  setUserEmail(state, payload) {
    state.userEmail = payload
  },
  setUserJender(state, payload) {
    state.userJender = payload
  },
  setUserThumbnail(state, payload) {
    state.userThumbnail = payload
  }
}
export const actions = {
  kakaoLogout({state, commit}, payload) {
    commit('setIsAuth', false)
    commit('setUserNm', '')
    commit('setUserEmail', '')
    commit('setUserJender', '')
    commit('setUserThumbnail', '')
  },
  kakaoLogin({state, commit}, Kakao) {
    console.log(`payload----------------`, Kakao)
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_APP_TOKEN)
    }
    Kakao.Auth.login({
      success: async (res) => {
        commit('setKakaoToken', res.access_token)
        console.log(`Kakao.Auth.login------------`, res)
        await Kakao.Auth.setAccessToken(res.access_token)
        await Kakao.API.request({
          // 유저 정보가져오기
          url: '/v2/user/me',
          data: {
            property_keys: ['kakao_account.email', 'kakao_account.gender', 'kakao_account.profile'] // 유저정보 가져올 배열
          }
        }).then((response) => {
          const {email, gender, profile} = response.kakao_account
          console.log(`/v2/user/me------------`, response)
          commit('setIsAuth', true)
          commit('setUserNm', profile.nickname)
          commit('setUserEmail', email)
          commit('setUserJender', gender)
          commit('setUserThumbnail', profile.profile_image_url)
        })
      },
      fail: () => {
        commit('setIsAuth', false)
      }
    })
  }
}
