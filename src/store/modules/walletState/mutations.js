const mutations = {
  SET_WEB3: (state, payload) => {
    state.web3 = payload;
  },
  SET_USER_ACCOUNT: (state, payload) => {
    state.userAccount = payload;
  },
  SET_INSTANCE: (state, payload) => {
    state.instance = payload;
  }
};

export default mutations;
