<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Primary Button",
  data() {
    return {
      code: `
      <button class="px-6 py-3 mr-2 text-white uppercase bg-indigo-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500"> Start now </button>
      <button class="px-6 py-3 mr-2 text-indigo-600 uppercase border rounded shadow-lg bg-white-400 dark:bg-white dark:text-black hover:text-indigo-400 border-gray-50">Contact us</button>
      `,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
