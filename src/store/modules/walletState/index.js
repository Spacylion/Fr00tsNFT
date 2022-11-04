import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default auth;
