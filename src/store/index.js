import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.user = payload;
    }
  },
  actions: {},
  modules: {},
});
