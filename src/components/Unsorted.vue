<template>
  <div>
    <Pricing1></Pricing1>
  </div>
</template>

<script>
import Pricing1 from "./Unsorted/Pricing1.vue";
export default {
  name: "Unsorted",
  props: ["mode"],
  components: { Pricing1 },
};
</script>

<style scoped></style>
