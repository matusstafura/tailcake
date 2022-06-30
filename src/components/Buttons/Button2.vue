<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With an icon",
  data() {
    return {
      code: `
<button class="inline-flex px-8 py-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">
  <svg class="w-5 mr-4" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" /></svg>
  <span class="text-lg">Add to Cart</span>
</button>

`,
      title: "With an icon",
    };
  },
};
</script>

<style scoped></style>
