<template>
  <div>
    <Element :mode="mode" :code="code"></Element>
  </div>
</template>

<script>
import Element from "./Element.vue";
export default {
  name: "Header",
  props: ["mode"],
  data() {
    return {
      code: `pass`,
    };
  },
  components: { Element },
};
</script>

<style scoped></style>
