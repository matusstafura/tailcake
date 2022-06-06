<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<footer class="p-4 text-gray-500 dark:text-gray-200 md:justify-between lg:flex">
  <p>© 2022 <a href="#" class="hover:underline">TailCake</a></p>
  <ul class="flex flex-wrap">
    <li><a href="#" class="mr-8 hover:underline">Privacy Policy</a></li>
    <li><a href="#" class="mr-8 hover:underline">Cookie Notice</a></li>
    <li><a href="#" class="mr-8 hover:underline">Conditions of use</a></li>
    <li><a href="#" class="hover:underline">Contact</a></li>
  </ul>
</footer>
`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
