<template>
  <div>
    <Blog1></Blog1>
    <Blog2></Blog2>
    <Blog3></Blog3>
  </div>
</template>

<script>
import Blog1 from "./Blog/Blog1.vue";
import Blog2 from "./Blog/Blog2.vue";
import Blog3 from "./Blog/Blog3.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Blog1, Blog2, Blog3 },
};
</script>

<style scoped></style>
