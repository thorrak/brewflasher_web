<template>
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label for="firmware_sel" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      Firmware
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
        <div v-for="this_firmware in firmware_list" :key="this_firmware.id" >
          {{ this_firmware.name }} - v{{this_firmware.version}} <span v-if="this_firmware.variant">- {{ this_firmware.variant }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirmwareSelector",
  props: [
    'firmware',
  ],
  data() {
    return {
      firmware_list: {},
    }
  },
  mounted() {
    this.getFirmwareList();
  },
  methods: {
    getFirmwareList: function() {
      let xhr = new XMLHttpRequest();
      let self = this;
      let url = "https://www.brewflasher.com/firmware/api/firmware_list/fw/" + self.$props.firmware.toString() + "/"

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