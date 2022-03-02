<template>
  <div>
    <Content1></Content1>
  </div>
</template>

<script>
import Content1 from "./Content/Content1.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Content1 },
};
</script>

<style scoped></style>
