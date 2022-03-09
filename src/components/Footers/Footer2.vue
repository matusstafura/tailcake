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
  <div class="container grid justify-between grid-cols-1 p-4 mx-auto text-sm text-gray-500 lg:grid-cols-2">
    <div class="flex">&copy; 2022 MyPersonalBlog.com</div>
    <div class="flex md:hidden">
      <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        </svg>
      </button>
    </div>
    <div class="flex ">
      <a href="#" class="block">About us</a>
      <a href="#" class="block">Cookies</a>
      <a href="#" class="block">Privacy Policy</a>
      <a href="#" class="block">Contact</a>
    </div>
  </div>
</footer>`,
      title: "Footer trivial",
    };
  },
};
</script>

<style scoped></style>
