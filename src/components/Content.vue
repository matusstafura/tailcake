<template>
  <div>
    <Content1></Content1>
    <Content2></Content2>
    <Content3></Content3>
  </div>
</template>

<script>
import Content1 from "./Content/Content1.vue";
import Content2 from "./Content/Content2.vue";
import Content3 from "./Content/Content3.vue";
export default {
  name: "Content",
  props: ["mode"],
  components: { Content1, Content2, Content3 },
};
</script>

<style scoped></style>
