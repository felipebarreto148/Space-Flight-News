import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Modules
import requests from "./modules/requests";

export default new Vuex.Store({
	modules: { requests },
});
