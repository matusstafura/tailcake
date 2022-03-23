<template>
  <div>
    <Alert1></Alert1>
  </div>
</template>

<script>
import Alert1 from "./Alerts/Alert1.vue";
export default {
  name: "Alerts",
  props: ["mode"],
  components: { Alert1 },
};
</script>

<style scoped></style>
