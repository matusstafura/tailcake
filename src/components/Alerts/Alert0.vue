<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Plain",
  data() {
    return {
      code: `<div class="flex justify-between w-full px-6 py-4 text-sm text-green-700 bg-green-200">
    <p>Product successfully added to cart</p>
</div>`,
      title: "Plain",
    };
  },
};
</script>

<style scoped></style>
