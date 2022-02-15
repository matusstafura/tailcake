<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Navbar2",
  data() {
    return {
      code: `<header class="bg-gray-100 shadow dark:bg-gray-700">

<div class="flex items-center justify-center px-4 py-4">

<nav class="hidden dark:text-white lg:block">
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">New</a>
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">Clothing</a>
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">Sportswear</a>
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">Trending</a>
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">Brands</a>
  <a href="#" class="p-2 px-4 font-light rounded hover:text-white hover:bg-blue-400">SALE</a>
</nav>

</div>

</header>`,
      title: "Navbar basic",
    };
  },
};
</script>

<style scoped></style>
