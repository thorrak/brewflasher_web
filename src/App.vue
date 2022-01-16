<template>

  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    <div class="px-4 py-5 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
    </div>
    <div class="px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <ProjectSelector v-model="project" />
      <DeviceFamilySelector v-if="project !== ''" v-model="device" :project="project" />
      <FirmwareSelector v-if="device !== '' && project !== ''" v-model="firmware" :project="project" :device="device" />
      <FlashButton v-if="firmware !== ''" :firmware="firmware"/>
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
    project (newProject) {
      console.log("New Project: " + newProject);
      this.device = "";
      this.firmware = "";
    },
    device (newDevice) {
      console.log("New Device: " + newDevice);
      this.firmware = "";
    },
    firmware (newFirmware) {
      console.log("New Firmware: " + newFirmware);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
