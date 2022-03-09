<template>
  <Commerce1></Commerce1>
  <Commerce2></Commerce2>
</template>

<script>
import Commerce2 from "./Commerce/Commerce2.vue";
import Commerce1 from "./Commerce/Commerce1.vue";
export default {
  name: "Button",
  props: ["mode"],
  components: { Commerce2, Commerce1 },
};
</script>

<style scoped></style>
