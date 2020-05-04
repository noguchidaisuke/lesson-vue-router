const state = {
  count: 2
}

const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
}

const mutations = {
  increment(state, num) {
    state.count += num;
  },
  decrement(state, num) {
    state.count -= num;
  }
}

const actions = {
  increment({commit}, num) {
    commit('increment', num);
  },
  decrement({commit}, num) {
    commit('decrement', num);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}