<template>
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label for="project" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      Device Family
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <select id="project" :value="modelValue" name="project" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md" aria-describedby="vol_unit-description" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="this_family in device_families" :key="this_family.id" :value="this_family.id">{{ this_family.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceFamilySelector",
  props: [
    'modelValue',
    'project'
  ],
  data() {
    return {
      device_families: [],
      unsupported_device_families: [],
    }
  },
  mounted() {
    this.getDeviceFamilies();
  },
  watch: {
    project () {
      // console.log("New Project in DeviceFamilySelector: " + newProject);
      this.getDeviceFamilies();
    },
  },
  methods: {
    getDeviceFamilies: function() {
      let xhr = new XMLHttpRequest();
      let self = this;
      let url = "https://www.brewflasher.com/firmware/api/firmware_family_list/project/" + self.$props.project.toString() + "/";

      // Reset device_families before we poll to replace it
      self.device_families = [];
      self.unsupported_device_families = [];

      xhr.open('GET', url);
      xhr.onload = function () {
        self.fullDict = JSON.parse(xhr.responseText);

        // Reset device_families before we poll to replace it
        self.device_families = [];
        self.unsupported_device_families = [];

        if (self.fullDict != null) {
          self.fullDict.forEach(function(item) {
            // console.log(item, index);
            if(item.name.substring(0, 3) === "ESP") {
              // console.log("Found ESP " + item.name);
              self.device_families.push(item)
            } else {
              // console.log("Found Non-ESP " + item.name);
              self.unsupported_device_families.push(item)
            }
          });
        }

      };
      xhr.send();
    },
  },

}
</script>

<style scoped>

</style>