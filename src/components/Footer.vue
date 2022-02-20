<template>
  <div>
    <Footer1></Footer1>
  </div>
</template>

<script>
import Footer1 from "./Footers/Footer1.vue";
export default {
  name: "Breadcrumbs",
  props: ["mode"],
  components: { Footer1 },
};
</script>

<style scoped></style>
