<template>
  <Navbar1></Navbar1>
  <Navbar2></Navbar2>
  <Navbar3></Navbar3>
  <Navbar4></Navbar4>
</template>

<script>
import Navbar1 from "./Navbars/Navbar1.vue";
import Navbar2 from "./Navbars/Navbar2.vue";
import Navbar3 from "./Navbars/Navbar3.vue";
import Navbar4 from "./Navbars/Navbar4.vue";

export default {
  name: "Navbar",
  props: ["mode"],
  components: {
    Navbar1,
    Navbar2,
    Navbar3,
    Navbar4,
  },
};
</script>

<style scoped></style>
