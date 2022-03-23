<template>
  <div>
    <Cta1></Cta1>
    <Cta2></Cta2>
  </div>
</template>

<script>
import Cta1 from "./Cta/Cta1.vue";
import Cta2 from "./Cta/Cta2.vue";
export default {
  name: "Cta",
  props: ["mode"],
  components: { Cta1, Cta2 },
};
</script>

<style scoped></style>
