<template>
  <div>
    <Breadcrumb1></Breadcrumb1>
  </div>
</template>

<script>
import Breadcrumb1 from "./Breadcrumbs/Breadcrumb1.vue";

export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: {
    Breadcrumb1,
  },
};
</script>

<style scoped></style>
