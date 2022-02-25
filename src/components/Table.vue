<template>
  <div>
    <Table1></Table1>
  </div>
</template>

<script>
import Table1 from "./Tables/Table1.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Table1 },
};
</script>

<style scoped></style>
