<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<div class="flex justify-center">
  <nav class="w-full">
    <ul class="flex justify-center py-2 text-gray-500 dark:text-gray-300 list-style-none">
      <li><a href="#" class="px-3 hover:underline">Previous</a></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-300 hover:text-white">1</a></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-300 hover:text-white">2</a></li>
      <li><span class="p-2 px-3 font-bold text-blue-400">3</span></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-300 hover:text-white">4</a></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-300 hover:text-white">5</a></li>
      <li><a href="#" class="px-3 hover:underline">Next</a></li>
    </ul>
  </nav>
</div>
`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
