<template>
  <div class="alert">
    <Alert :show="metaMask.installed" />
    <HelpDialog />
    <Wallet :address="metaMask.address" />
  </div>

  <v-card
    loading="true"
    class="alert"
    max-width="700"
    v-show="!metaMask.connected && metaMask.installed"
    style="text-align: center"
  >
    <v-img
      style="margin: auto"
      :aspect-ratio="16 / 9"
      width="700"
      src="../assets/box_lock.png"
    ></v-img>
    <v-card-text>Wallet Not connected!</v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import Alert from "../components/Alert.vue";
import HelpDialog from "../components/HelpDialog.vue";
import Wallet from "../components/Wallet.vue";
export default {
  name: "Home",
  computed: {
    ...mapState(["metaMask"]),
  },
  components: {
    Alert,
    HelpDialog,
    Wallet,
  },
};
</script>

<style scoped>
.alert {
  margin: auto;
  margin-top: 2em;
  width: 500px;
}
</style>
