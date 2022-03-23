<template>
  <div>
    <Footer1></Footer1>
    <Footer2>jjj</Footer2>
  </div>
</template>

<script>
import Footer1 from "./Footers/Footer1.vue";
import Footer2 from "./Footers/Footer2.vue";
export default {
  name: "Footer",
  props: ["mode"],
  components: { Footer1, Footer2 },
};
</script>

<style scoped></style>
