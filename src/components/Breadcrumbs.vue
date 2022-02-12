<template>
  <div>
    <Breadcrumb1></Breadcrumb1>
    <Breadcrumb2></Breadcrumb2>
  </div>
</template>

<script>
import Breadcrumb1 from "./Breadcrumbs/Breadcrumb1.vue";
import Breadcrumb2 from "./Breadcrumbs/Breadcrumb2.vue";

export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: {
    Breadcrumb1,
    Breadcrumb2,
  },
};
</script>

<style scoped></style>
