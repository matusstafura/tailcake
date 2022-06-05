<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Toggle",
  data() {
    return {
      code: `
<div class="flex items-center">
<p class="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</p>
<label for="default-toggle" class="relative inline-flex cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
  <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-green-800"></div>
</label>
</div>
`,
      title: "Toggle",
    };
  },
};
</script>

<style scoped></style>
