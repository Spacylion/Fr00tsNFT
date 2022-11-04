import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import wallet from "./modules/walletState/";

export default new Vuex.Store({
	modules: {
		wallet: wallet
	},
});
