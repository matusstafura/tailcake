<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<div class="max-w-md">
  <textarea class="w-full p-4 text-gray-500 border rounded-lg shadow-sm" maxlength="3000" rows="10" placeholder="Insert text" name="textarea"></textarea>
</div>
`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
