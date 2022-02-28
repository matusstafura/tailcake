<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Footer trivial",
  data() {
    return {
      code: `<footer>
  <div class="container flex justify-between p-4 mx-auto text-sm text-gray-500">
    <div class="flex">&copy; 2022 MyPersonalBlog.com</div>
    <div class="flex">
      <a href="#" class="mx-4">About us</a>
      <a href="#" class="mx-4">Cookies</a>
      <a href="#" class="mx-4">Privacy Policy</a>
      <a href="#" class="mx-4">Contact</a>
    </div>
  </div>
</footer>`,
      title: "Footer trivial",
    };
  },
};
</script>

<style scoped></style>
