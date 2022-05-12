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
      code: `<button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500">
  Button
</button>`,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
