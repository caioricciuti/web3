import { createStore } from "vuex";

export default createStore({
  state: {
    metaMask: {
      loading: false,
      installed: false,
      connected: false,
      address: null,
      amout: null,
    },
    helpDialog: false,
  },
  mutations: {
    SET_METAMASK(state, metaMask) {
      state.metaMask = metaMask;
    },
    SET_HELP_DIALOG(state, helpDialog) {
      state.helpDialog = helpDialog;
    },
  },
  actions: {
    setMetaMask({ commit }, metaMask) {
      commit("SET_METAMASK", metaMask);
    },
    setHelpDialog({ commit }, helpDialog) {
      commit("SET_HELP_DIALOG", helpDialog);
    },
  },
  modules: {},
});
