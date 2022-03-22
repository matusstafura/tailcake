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
      code: `<div class="w-full px-4 py-4 text-sm font-light text-gray-700 capitalize bg-gray-100 dark:bg-gray-500 dark:text-gray-100">
  <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Home</a>
  <span class="mx-2">/</span>
  <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Hobby</a>
  <span class="mx-2">/</span>
  <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Crafting</a>
</div>`,
      title: "Slash",
    };
  },
};
</script>

<style scoped></style>
