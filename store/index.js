import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = () => ({
  loggedIn: false,
  email: "",
  password: "",
});
const mutations = {
  setLogin(state, val) {
    state.loggedIn = val;
  },
};
const actions = {
  setLogin({ commit }, val) {
    commit("setLogin", val);
  },
};
const getters = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
