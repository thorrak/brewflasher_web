<template>
  <esp-web-install-button :manifest="manifestUrl">
    <!-- eslint-disable-next-line vue/no-deprecated-slot-attribute-->
    <button slot="activate" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <DownloadIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      Flash to Controller
    </button>
  </esp-web-install-button>
</template>

<script>
import 'esp-web-tools/dist/web/install-button'
import { DownloadIcon } from '@heroicons/vue/solid'

export default {
  name: "FlashButton",
  props: [
      'firmware',
  ],
  components: {
    DownloadIcon
  },
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