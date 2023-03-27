import {ApiUtil} from '~/utils/ApiUtil'
export const KEY_NAME = 'post-list'

export const state = () => ({
  postList: ApiUtil.localStorage.getItem(KEY_NAME) || [
    {
      post_type: 'text', // text||image
      content: ''
    },
    {
      post_type: 'image', // text||image
      content: ''
    }
  ]
})
export const getters = {
  getPostList(state) {
    return state.postList
  }
}
export const mutations = {
  setPostList(state, payload) {
    console.log('store/post/create---------------mutation', payload)
    state.postList = [...[], ...payload]
  }
}
export const actions = {
  async setPostList({commit}, payload) {
    await ApiUtil.localStorage.setItem(KEY_NAME, JSON.stringify(payload))
    commit('setPostList', payload)
  }
}
