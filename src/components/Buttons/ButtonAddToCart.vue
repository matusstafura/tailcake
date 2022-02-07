<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Add To Cart Button",
  data() {
    return {
      code: `<button class="px-6 py-3 text-black bg-yellow-300 rounded shadow-lg hover:bg-yellow-400">
  Add To Cart
</button>`,
      title: "Add To Cart Button",
    };
  },
};
</script>

<style scoped></style>
