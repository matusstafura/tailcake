<template>
  <div>
    <Blog1></Blog1>
    <Blog2></Blog2>
  </div>
</template>

<script>
import Blog1 from "./Blog/Blog1.vue";
import Blog2 from "./Blog/Blog2.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Blog1, Blog2 },
};
</script>

<style scoped></style>
