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
<div class="flex justify-between bg-white border border-gray-200 rounded-lg shadow-lg md:w-[32rem] w-96 dark:bg-gray-300">
  <div class="px-6 py-4 text-gray-600">Email sent</div>
  <div class="px-6 py-4 text-blue-500">
    <a href="#" class="hover:underline">Close</a>
  </div>
</div>
`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
