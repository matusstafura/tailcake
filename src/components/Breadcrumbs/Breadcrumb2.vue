<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Breacrumb2",
  data() {
    return {
      code: `<nav class="flex w-full px-6 py-6 font-light text-gray-700 capitalize bg-gray-100 border border-gray-200 dark:bg-gray-500 dark:text-gray-100">

  <a href="#" class="flex hover:text-blue-500 dark:hover:text-blue-300">
  <svg class="w-4 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
  Home
  </a>

  <span class="mx-4">/</span>

  <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Hobby</a>

  <span class="mx-4">/</span>

  <a href="#" class="text-gray-500 hover:text-blue-500 dark:hover:text-blue-300">Crafting</a>

</nav>`,
      title: "Slash",
    };
  },
};
</script>

<style scoped></style>
