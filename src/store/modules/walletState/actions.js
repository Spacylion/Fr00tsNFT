const actions = {
  SET_WEB3({ commit }, payload) {
    commit("SET_WEB3", payload);
  },
  SET_USER_ACCOUNT({ commit }, payload) {
    commit("SET_USER_ACCOUNT", payload);
  },
  SET_INSTANCE({ commit }, payload) {
    commit("SET_INSTANCE", payload);
  }
};

export default actions;
