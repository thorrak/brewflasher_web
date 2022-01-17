<template>
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
    <label for="project" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      Project
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <select id="project" :value="modelValue" name="project" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md" aria-describedby="vol_unit-description" @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="this_project in projects" :key="this_project.id" :value="this_project.id">{{ this_project.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSelector",
  props: ['modelValue'],
  data() {
    return {
      projects: {},
    }
  },
  mounted() {
    this.getProjects();
    // window.setInterval(() => {
    //   this.getProjects()
    // }, 15000)
  },
  methods: {
    getProjects: function() {
      let xhr = new XMLHttpRequest();
      let self = this;

      xhr.open('GET', "https://www.brewflasher.com/firmware/api/project_list/all/");
      xhr.onload = function () {
        self.fullDict = JSON.parse(xhr.responseText);

        if (self.fullDict != null) {
          self.projects = self.fullDict;
        }
      };
      xhr.send();
    },
  },

}
</script>

<style scoped>

</style>