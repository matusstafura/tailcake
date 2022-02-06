<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Button2",
  data() {
    return {
      code: `<button class="bg-blue-400 dark:bg-white dark:text-black px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700">
  Button
</button>`,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
