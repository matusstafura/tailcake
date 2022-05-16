<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Charge buttons",
  data() {
    return {
      code: `
<a href="#" class="w-1/2 px-32 py-4 text-white bg-gray-800 rounded-sm hover:bg-black">
  <span>Pay €123.45</span>
</a>
`,
      title: "Charge buttons",
    };
  },
};
</script>

<style scoped></style>
