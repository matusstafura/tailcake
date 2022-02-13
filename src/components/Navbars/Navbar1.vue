<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Navbar1",
  data() {
    return {
      code: `asdfasdf`,
      title: "Navbar basic",
    };
  },
};
</script>

<style scoped></style>
