<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">

      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="project" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Device Family
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <!--              <select id="country" name="country" autocomplete="country-name" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">-->
              <!--                <option>United States</option>-->
              <!--                <option>Canada</option>-->
              <!--                <option>Mexico</option>-->
              <!--              </select>-->

              <select id="project" :value="modelValue" name="project" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md" aria-describedby="vol_unit-description" @input="$emit('update:modelValue', $event.target.value)">
                <option v-for="this_family in device_families" :key="this_family.id" :value="this_family.id">{{ this_family.name }}</option>
              </select>
            </div>
          </div>

        </div>
      </div>


    </div>

<!--    <div class="pt-5">-->
<!--      <div class="flex justify-end">-->
<!--        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--          Cancel-->
<!--        </button>-->
<!--        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--          Save-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
  </form>

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
      device_families: {},
    }
  },
  mounted() {
    this.getDeviceFamilies();
  },
  watch: {
    project (newProject) {
      console.log("New Project in DeviceFamilySelector: " + newProject);
      this.getDeviceFamilies();
    },
  },
  methods: {
    getDeviceFamilies: function() {
      let xhr = new XMLHttpRequest();
      let self = this;
      let url = "https://www.brewflasher.com/firmware/api/firmware_family_list/project/" + self.$props.project.toString() + "/";

      xhr.open('GET', url);
      xhr.onload = function () {
        self.fullDict = JSON.parse(xhr.responseText);

        // TODO - Add logic to screen Arduino devices here
        if (self.fullDict != null) {
          self.device_families = self.fullDict;
        }

      };
      xhr.send();
    },
  },

}
</script>

<style scoped>

</style>