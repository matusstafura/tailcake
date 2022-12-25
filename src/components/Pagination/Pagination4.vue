<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With count full width",
  data() {
    return {
      code: `
<div class="grid grid-cols-1 text-gray-600 xl:grid-cols-2 dark:text-white">
  <div class="p-2 m-auto dark:text-gray-200 xl:m-0">Showing <strong>1</strong> - <strong>40</strong> of <strong>165</strong> results</div>
  <nav class="flex m-auto dark:text-gray-200 xl:m-0">
    <a href="#" class="py-2 mx-2 text-blue-400 hover:underline">Previous</a>
    <a href="#" class="px-4 py-2 border border-gray-300 md:mx-2 hover:bg-gray-200 dark:hover:bg-gray-500">1</a>
    <a href="#" class="px-4 py-2 border border-gray-300 md:mx-2 hover:bg-gray-200 dark:hover:bg-gray-500"">2</a>
    <span class="px-4 py-2 text-white bg-blue-500 border border-gray-300 md:mx-2 dark:bg-gray-400 dark:text-white">3</span>
    <a href="#" class="px-4 py-2 border border-gray-300 md:mx-2 hover:bg-gray-200 dark:hover:bg-gray-500"">4</a>
    <a href="#" class="px-4 py-2 border border-gray-300 md:mx-2 hover:bg-gray-200 dark:hover:bg-gray-500"">5</a>
    <span class="py-2 mx-2 hover:bg-gray-200">...</span>
    <a href="#" class="py-2 mx-2 text-blue-400 hover:underline">Next</a>
  </nav>
</div>
`,
      title: "With count full width",
    };
  },
};
</script>

<style scoped></style>
