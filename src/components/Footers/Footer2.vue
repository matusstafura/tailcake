<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Centered",
  data() {
    return {
      code: `
<footer class="p-2 mx-auto text-center">
  <ul class="inline-flex pb-4 text-gray-500 gap-x-7">
    <li><a href="#" class="hover:underline">Privacy Policy</a></li>
    <li><a href="#" class="hover:underline">Cookie Notice</a></li>
    <li><a href="#" class="hover:underline">Conditions of use</a></li>
    <li><a href="#" class="hover:underline">Contact</a></li>
  </ul>
  <p class="text-gray-400">© 2022 TailCake. All rights reserved.</p>
</footer>

`,
      title: "Centered",
    };
  },
};
</script>

<style scoped></style>
