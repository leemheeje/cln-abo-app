export const state = () => ({
  pageInfo: {
    title: 'Main',
    category: ''
  }
})
export const getters = {
  getPageInfo(state) {
    return state.pageInfo
  }
}
export const mutations = {
  setPageInfo(state, payload) {
    state.pageInfo = payload
  }
}
export const actions = {
  setPageInfo({state, commit}, payload) {
    if (process.client) console.log(`common/mutations.payload-------------------`, payload)
    commit('setPageInfo', payload)
  }
}
