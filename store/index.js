export const state = () => ({
  clt: [],
  vb: [],
  phx: [],
  rich: []
})

export const mutations = {
  CITY_DATA: function (state, data) {
    switch (data.city) {
      case 'Charlotte':
        state.clt = data.newhires
        break
      case 'Phoenix':
        state.phx = data.newhires
        break
      case 'Virginia Beach':
        state.vb = data.newhires
        break
      case 'Richmond':
        state.rich = data.newhires
        break
    }
  }
}

export const actions = {
  setCityData ({commit}, data) {
    return commit('CITY_DATA', data)
  }
}
