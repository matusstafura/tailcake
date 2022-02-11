<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Breacrumb1",
  data() {
    return {
      code: `<div class="w-full">
<div class="w-full px-4 py-4 font-light text-gray-700 capitalize bg-gray-100">
<a href="#" class="hover:text-blue-500">Home</a>
<span>></span>
<a href="#" class="hover:text-blue-500">Hobby</a>
<span>></span>
<a href="#" class="hover:text-blue-500">Crafting</a>
</div>
</div>`,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
