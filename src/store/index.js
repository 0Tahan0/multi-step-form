import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: "hello from store",
  },
  getters: {
    Inf(state) {
      return state.info;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
