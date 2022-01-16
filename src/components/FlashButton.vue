<template>
  <esp-web-install-button
      :manifest="manifestUrl"
  ></esp-web-install-button>
</template>

<script>
export default {
  name: "FlashButton",
  props: [
      'firmware',
  ],

  computed: {
    // a computed getter
    manifestUrl: function () {
      // `this` points to the vm instance
      return "https://www.brewflasher.com/firmware/api/firmware_manifest/" + this.$props.firmware + "/";
    }
  }

}
</script>

<style scoped>

</style>