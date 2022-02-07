<template>
  <v-alert
    v-show="!show"
    color="error"
    icon="mdi-alert"
    border="start"
    prominent
    class="ma-2"
  >
    This app needs MetaMask wallet to function.
    <v-btn
      target="_blank"
      href="https://metamask.io/download/"
      variant="outlined"
      >Install</v-btn
    >
  </v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: ["show"],
};
</script>

<style></style>
