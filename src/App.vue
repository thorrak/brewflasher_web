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
              <ProjectSelector v-model="project" />
            </div>
          </li>

          <li v-if="project !== ''">
            <div class="px-4 py-4 sm:px-6">
              <DeviceFamilySelector v-model="device" :project="project" />
            </div>
          </li>

          <li v-if="device !== '' && project !== ''">
            <div class="px-4 py-4 sm:px-6">
              <FirmwareSelector v-model="firmware" :project="project" :device="device" />
            </div>
          </li>

          <li v-if="firmware !== ''">
            <div class="px-4 py-4 sm:px-6">
              <FlashButton :firmware="firmware"/>
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
      <span class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 text-gray-400">BrewFlasher Web Edition - <a href="https://github.com/thorrak/brewflasher_web/blob/master/LICENSE" class="text-gray-400">License/Terms of Use</a></span>

    </div>
  </div>

</template>

<script>
import ProjectSelector from "@/components/ProjectSelector";
import DeviceFamilySelector from "@/components/DeviceFamilySelector";
import FirmwareSelector from "@/components/FirmwareSelector";
import FlashButton from "@/components/FlashButton";
import Bowser from "bowser";


export default {
  name: 'App',
  components: {
    FlashButton,
    ProjectSelector,
    DeviceFamilySelector,
    FirmwareSelector,
  },
  data() {
    return {
      project: "",
      device: "",
      firmware: "",
    }
  },
  watch: {
    project () {
      // console.log("New Project: " + newProject);
      this.device = "";
      this.firmware = "";
    },
    device () {
      // console.log("New Device: " + newDevice);
      this.firmware = "";
    },
    // firmware (newFirmware) {
    //   console.log("New Firmware: " + newFirmware);
    // },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
