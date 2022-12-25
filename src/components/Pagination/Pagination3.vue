<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Compact with border",
  data() {
    return {
      code: `
<div class="flex justify-center">
  <nav class="flex -space-x-px text-gray-500 dark:text-gray-200">
    <a href="#" class="px-2 py-2 border border-gray-300 rounded-l hover:bg-gray-200 dark:hover:bg-gray-500"">
      <svg class="w-5 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
    <a href="#" class="px-4 py-2 border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"">1</a>
    <a href="#" class="px-4 py-2 border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"">2</a>
    <span href="#" class="px-4 py-2 bg-blue-100 border border-gray-300 hover:bg-gray-200 dark:bg-gray-400 dark:text-white">3</span>
    <a href="#" class="px-4 py-2 border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"">...</a>
    <a href="#" class="px-4 py-2 border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"">100</a>
    <a href="#" class="px-2 py-2 border border-gray-300 rounded-r hover:bg-gray-200 dark:hover:bg-gray-500"">
      <svg class="w-5 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </nav>
</div>
`,
      title: "Compact with border",
    };
  },
};
</script>

<style scoped></style>
