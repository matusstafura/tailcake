<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Warning Button",
  data() {
    return {
      code: `<button class="px-6 py-3 font-bold text-white uppercase bg-red-400 rounded shadow-lg hover:bg-red-500">
  Danger
</button>`,
      title: "Warning Button",
    };
  },
};
</script>

<style scoped></style>
