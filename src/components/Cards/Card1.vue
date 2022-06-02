<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Trivial Card",
  data() {
    return {
      code: `
<div class="max-w-md p-8 rounded-md shadow-xl text-slate-600 dark:text-gray-200 dark:bg-gray-500">
  <h3 class="text-xl font-semibold">The Complete Guide to Learning Go</h3>
  <p class="mt-4 mb-6 text-slate-500 dark:text-gray-300">Go is an open source, strongly typed, compiled language written to build concurrent and scalable software. Go is designed for simple, reliable, and efficient software.</p>
  <a href="#" class="px-4 py-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Read more</a>
</div>
`,
      title: "Trivial Card",
    };
  },
};
</script>

<style scoped></style>
