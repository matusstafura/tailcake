<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Tooltip",
  data() {
    return {
      code: `
      <div class="flex">
<div class="w-64 group">
  <div class="absolute hidden p-3 text-yellow-800 rounded shadow -mt-14 group-hover:block bg-yellow-50">Here's more information.</div>
  <button class="block w-32 px-4 py-3 text-white bg-blue-400 rounded-md">hover me</button>
</div>

<div class="w-64 group">
  <div class="absolute hidden p-3 text-yellow-800 rounded shadow -mt-14 group-hover:block bg-yellow-50">Here's more information.</div>
  <a class="text-black underline decoration-dotted">more info</a>
</div>
</div>
      `,
      title: "Tooltip",
    };
  },
};
</script>

<style scoped></style>
