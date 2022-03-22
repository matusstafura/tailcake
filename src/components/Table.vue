<template>
  <div>
    <Table1></Table1>
    <Table2></Table2>
  </div>
</template>

<script>
import Table1 from "./Tables/Table1.vue";
import Table2 from "./Tables/Table2.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Table1, Table2 },
};
</script>

<style scoped></style>
