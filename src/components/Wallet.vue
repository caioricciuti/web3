<template>
  <v-card
    v-show="metaMask.connected"
    class="mx-auto"
    max-width="600"
    variant="outlined"
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">Connected</div>
        <div class="text-h6 mb-1">{{ address }}</div>
      </div>
    </v-card-header>

    <v-card-actions>
      <v-btn variant="outlined" rounded text> Disconnect </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Wallet",
  computed: {
    ...mapState(["metaMask"]),
  },
  props: ["address"],
};
</script>
