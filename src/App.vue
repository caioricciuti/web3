<template>
  <v-layout>
    <v-app-bar density="compact" absolute>
      <v-app-bar-title>Web3 | Caio Ricciuti</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/caioricciuti/web3"
        target="_blank"
        class="mr-4 ml-5"
        icon="mdi-github"
        size="small"
        variant="outlined"
      >
      </v-btn>

      <v-btn @click="handleHelpDialog" color="primary" class="mr-3">Help</v-btn>

      <v-divider
        v-show="!metaMask.connected && metaMask.installed"
        inset
        vertical
      ></v-divider>
      <v-btn
        v-show="!metaMask.connected && metaMask.installed"
        class="mr-4 ml-5"
        color="success"
        @click="handleConnectWallet"
      >
        <v-icon left icon="mdi-wallet"></v-icon>
        <span>Connect Wallet</span>
      </v-btn>
      <v-btn
        v-show="metaMask.connected"
        class="mr-4 ml-5"
        color="warning"
        @click="handleDiconnectWallet"
      >
        <v-icon left icon="mdi-lan-disconnect"></v-icon>
        <span>Disconnect Wallet</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["metaMask"]),
    ...mapActions(["setMetaMask"]),
  },
  async mounted() {
    if (window.ethereum) {
      this.$store.dispatch("setMetaMask", {
        installed: true,
        connected: false,
        address: null,
      });
    }
  },
  methods: {
    handleHelpDialog() {
      this.$store.dispatch("setHelpDialog", true);
    },
    async handleConnectWallet() {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts) {
          this.$store.dispatch("setMetaMask", {
            installed: true,
            connected: true,
            address: accounts[0],
            amout: null,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleDiconnectWallet() {
      try {
        this.$store.dispatch("setDisconnectDialog", true);
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {};
  },
};
</script>
