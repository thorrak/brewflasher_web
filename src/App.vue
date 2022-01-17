<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="max-w-none mx-auto">
      <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">

        <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Select Firmware
          </h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200">

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
      </div>
    </div>
  </div>

</template>

<script>
import ProjectSelector from "@/components/ProjectSelector";
import DeviceFamilySelector from "@/components/DeviceFamilySelector";
import FirmwareSelector from "@/components/FirmwareSelector";
import FlashButton from "@/components/FlashButton";


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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
