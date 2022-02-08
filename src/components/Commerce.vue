<template>
  <div>
    <CommerceSidebar></CommerceSidebar>
  </div>
</template>

<script>
import CommerceSidebar from "./CommerceSidebar.vue";
export default {
  name: "Button",
  props: ["mode"],
  components: { CommerceSidebar },
};
</script>

<style scoped></style>
