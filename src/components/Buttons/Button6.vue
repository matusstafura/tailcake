<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Tooltip",
  data() {
    return {
      code: `
<div class="flex items-center gap-x-20">
  <div class="group">
    <div class="absolute hidden p-3 text-yellow-800 rounded shadow -mt-14 bg-yellow-50 group-hover:block">Here's more information.</div>
    <button class="block w-32 px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500">hover me</button>
  </div>

  <div class="group">
    <div class="absolute hidden p-3 text-yellow-800 rounded shadow -mt-14 bg-yellow-50 group-hover:block">Here's more information.</div>
    <a class="text-black underline decoration-dotted dark:text-blue-400">more info</a>
  </div>
</div>    
      `,
      title: "Tooltip",
    };
  },
};
</script>

<style scoped></style>
