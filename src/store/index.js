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
    disconnectDialog: false,
  },
  mutations: {
    SET_METAMASK(state, metaMask) {
      state.metaMask = metaMask;
    },
    SET_HELP_DIALOG(state, helpDialog) {
      state.helpDialog = helpDialog;
    },
    SET_DISCONNECT_DIALOG(state, disconnectDialog) {
      state.disconnectDialog = disconnectDialog;
    },
  },
  actions: {
    setMetaMask({ commit }, metaMask) {
      commit("SET_METAMASK", metaMask);
    },
    setHelpDialog({ commit }, helpDialog) {
      commit("SET_HELP_DIALOG", helpDialog);
    },
    setDisconnectDialog({ commit }, disconnectDialog) {
      commit("SET_DISCONNECT_DIALOG", disconnectDialog);
    },
  },
  modules: {},
});
