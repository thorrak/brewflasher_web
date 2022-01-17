<template>
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label for="firmware_sel" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      Firmware
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <select id="firmware_sel" :value="modelValue" name="firmware_sel" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md" aria-describedby="vol_unit-description" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="this_firmware in firmware_list" :key="this_firmware.id" :value="this_firmware.id">{{ this_firmware.name }} - v{{this_firmware.version}} <span v-if="this_firmware.variant">- {{ this_firmware.variant }}</span></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirmwareSelector",
  props: [
    'modelValue',
    'project',
    'device'
  ],
  data() {
    return {
      firmware_list: {},
    }
  },
  mounted() {
    this.getFirmwareList();
  },
  watch: {
    project () {
      // console.log("New Project in DeviceFamilySelector: " + newProject);
      this.getFirmwareList();
    },
    device () {
      // console.log("New Device in DeviceFamilySelector: " + newDevice);
      this.getFirmwareList();
    },
  },
  methods: {
    getFirmwareList: function() {
      let xhr = new XMLHttpRequest();
      let self = this;
      let url = "https://www.brewflasher.com/firmware/api/firmware_list/" + self.$props.device.toString() + "/project/" + self.$props.project.toString() + "/"

      xhr.open('GET', url);
      xhr.onload = function () {
        self.fullDict = JSON.parse(xhr.responseText);

        if (self.fullDict != null) {
          self.firmware_list = self.fullDict;
        }

      };
      xhr.send();
    },
  },

}
</script>

<style scoped>

</style>