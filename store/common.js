export const state = () => ({
  pageInfo: {
    title: 'Main',
    category: ''
  },
  dialogs: []
})
export const getters = {
  getPageInfo(state) {
    return state.pageInfo
  },
  getDialogs(state) {
    return state.dialogs
  }
}
export const mutations = {
  setPageInfo(state, payload) {
    state.pageInfo = payload
  },
  setDialogs(state, payload) {
    let _payload = payload
    if (typeof payload === 'string') {
      _payload = {
        message: payload
      }
    }
    state.dialogs.push(_payload)
  },
  removeDialogs(state, payload) {
    if (process.client) console.log(`common/mutations.removeDialogs-------------------`, state.dialogs)
    if (process.client) console.log(`common/mutations.removeDialogs-------------------`, payload)
    state.dialogs = state.dialogs.filter((item, index) => index !== payload)
  }
}
export const actions = {
  setPageInfo({state, commit}, payload) {
    if (process.client) console.log(`common/mutations.payload-------------------`, payload)
    commit('setPageInfo', payload)
  }
}
