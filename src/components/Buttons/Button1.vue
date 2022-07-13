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
<button class="px-6 py-3 bg-blue-600 rounded shadow-md text-blue-50 hover:bg-blue-500 dark:hover:bg-blue-400">Read more</button>
      `,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
