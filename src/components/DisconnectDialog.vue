<template>
  <div class="text-center">
    <v-dialog
      style="margin: auto"
      persistent
      v-model="disconnectDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Disconnect your wallet!
        </v-card-title>

        <v-card-text>
          Since I'm very interested in Web3, I decided to build a simple app
          that allows end-user to connect (Authenticate), with MetaMask wallet.
          Why MetaMask? Because it's the most used wallet that provides a
          browser extension, once you have MetaMask's browser extension
          installed you can connect to the app.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="warning"
            text
            @click="handleCloseDisconnectWalletDialog"
          >
            Understood!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["disconnectDialog"]),
    ...mapActions(["setDisconnectDialog"]),
  },
  methods: {
    handleCloseDisconnectWalletDialog() {
      this.$store.dispatch("setDisconnectDialog", false);
    },
  },
  data() {
    return {};
  },
};
</script>
