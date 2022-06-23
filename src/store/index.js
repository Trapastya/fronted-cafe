import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    sumOfBasket: 0
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.user = payload;
    },
    SET_SUM_BASKET(state, payload) {
      state.sumOfBasket = payload;
    }
  },
  actions: {},
  modules: {},
});
