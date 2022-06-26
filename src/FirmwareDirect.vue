<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="max-w-none mx-auto">
      <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">

        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            <span v-if="isSupported">Select Firmware</span>
            <span v-if="!isSupported" class="text-red-600">Warning: Browser Unsupported!</span>
          </h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200" v-if="isSupported">

          <li>
            <div class="px-4 py-4 sm:px-6">
              <FirmwareZoom :firmware="$route.params.id" />
            </div>
          </li>

          <li>
            <div class="px-4 py-4 sm:px-6">
              <FlashButton :firmware="$route.params.id" :directLink="1" />
            </div>
          </li>

        </ul>

        <div class="px-4 sm:px-6" v-if="!isSupported">
          <p class="py-4">
            Unfortunately, your browser does not support <a href="https://caniuse.com/web-serial">Web Serial</a> which is
            required for this app to function. Web Serial is currently supported by recent, desktop versions of Google
            Chrome, Microsoft Edge, and Opera.
          </p>

          <p class="py-4">
            Instead of using the web app, try downloading <a href="https://github.com/thorrak/brewflasher/releases">BrewFlasher Desktop</a>
            instead.
          </p>
        </div>


      </div>
      <div class="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8 text-gray-400">BrewFlasher Web Edition - <a href="https://github.com/thorrak/brewflasher_web/blob/master/LICENSE" class="text-gray-400">License/Terms of Use</a></div>

    </div>
  </div>

</template>

<script>

import FlashButton from "@/components/FlashButton";
import Bowser from "bowser";
import FirmwareZoom from "@/components/FirmwareZoom";

export default {
  name: "FirmwareDirect",
  components: {
    FlashButton,
    FirmwareZoom,
  },
  data() {
    return {
      firmware: "",
    }
  },
  computed: {
    isSupported: function () {
      const browser = Bowser.getParser(window.navigator.userAgent);
      return browser.satisfies({
        // From https://caniuse.com/web-serial
        opera: ">=76",
        edge: ">=90",
        chrome: ">= 89",
      });
    }
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>