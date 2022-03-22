<template>
  <div>
    <Cta1></Cta1>
    <Cta2></Cta2>
  </div>
</template>

<script>
import Cta1 from "./Unsorted/Cta1.vue";
import Cta2 from "./Unsorted/Cta2.vue";
export default {
  name: "Unsorted",
  props: ["mode"],
  components: { Cta1, Cta2 },
};
</script>

<style scoped></style>
