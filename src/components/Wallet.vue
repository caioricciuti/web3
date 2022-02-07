<template>
  <v-card
    v-show="metaMask.connected"
    class="mx-auto"
    max-width="600"

    elevation="5"
  >
    <v-card-header>
      <div>
        <v-chip class="ma-2" color="green" label text-color="white">
          <v-icon left icon="mdi-check-decagram"></v-icon>
          Connected
        </v-chip>

        <div class="text-h6 mb-1">{{ address }}</div>
      </div>
    </v-card-header>
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
