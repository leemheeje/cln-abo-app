import {ApiUtil} from '~/utils/ApiUtil'
export const KEY_NAME = 'post-list'

export const state = () => ({
  postList: []
})
export const getters = {
  getPostList(state) {
    return state.postList
  }
}
export const mutations = {
  setPostList(state, payload) {
    console.log('store/post/create---------------mutation', payload.content)
    if (payload) {
      const flg = state.postList.find(({code}) => code === payload.code)
      // state.postList.push(payload)
      state.postList = flg
        ? state.postList.map((item) => {
            if (item.code === payload.code) {
              return payload
            }
            return item
          })
        : Array.isArray(payload)
        ? [...state.postList, ...payload]
        : [...state.postList, payload]
    }
  },
  deletePostList(state, payload) {
    state.postList = state.postList.filter(({code}) => code !== payload.code)
  }
}
export const actions = {
  async setPostList({commit}, payload) {
    await ApiUtil.localStorage.setItem(KEY_NAME, JSON.stringify(payload))

    payload.map((post) => commit('setPostList', post))
  }
}
