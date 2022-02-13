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
      code: `<button class="flex px-6 py-3 font-light text-white bg-blue-400 rounded shadow-lg hover:bg-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
  <span class="mx-1">Add To Cart</span>
</button>`,
      title: "Add To Cart Button",
    };
  },
};
</script>

<style scoped></style>
