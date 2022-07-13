<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Round Button",
  data() {
    return {
      code: `
<button class="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-500">
  <span>Get in touch</span> 
</button>
      `,
      title: "Round Button",
    };
  },
};
</script>

<style scoped></style>
