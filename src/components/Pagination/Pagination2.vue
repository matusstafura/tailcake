<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Full width",
  data() {
    return {
      code: `
<div class="mx-4 text-sm text-gray-500 dark:text-gray-300">
  <hr class="w-full border-gray-100" />
  <div class="flex justify-center px-4 py-2">
  <div><a href="#" class="hover:underline">Previous</a></div>
  <nav class="w-full -my-px bg-red">
    <ul class="flex justify-center list-style-none">
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-500 hover:text-white">1</a></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-500 hover:text-white">2</a></li>
      <li><span class="p-2 px-3 font-bold text-blue-400 border-t border-blue-400">3</span></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-500 hover:text-white">4</a></li>
      <li><a href="#" class="p-2 px-3 rounded hover:bg-blue-500 hover:text-white">5</a></li>     
    </ul>
  </nav>
  <div>
    <a href="#" class="flex hover:underline">Next</a>
  </div>
  </div>
</div>
`,
      title: "Full width",
    };
  },
};
</script>

<style scoped></style>
