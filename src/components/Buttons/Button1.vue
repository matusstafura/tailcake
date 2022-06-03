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

<button class="px-6 py-3 m-2 text-white uppercase bg-indigo-400 rounded shadow-lg hover:bg-indigo-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Start now</button>
<button class="px-6 py-3 m-2 text-indigo-500 uppercase border rounded shadow-lg bg-white-400 border-gray-50 hover:text-indigo-400 dark:text-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-100">Contact us</button>
<button class="px-4 py-2 m-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Read more</button>
      `,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
