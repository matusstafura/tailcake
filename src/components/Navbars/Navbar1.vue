<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Navbar1",
  data() {
    return {
      code: `<header class="bg-gray-100 shadow dark:bg-gray-700">

<div class="flex items-center justify-between px-4 py-4">

<div class="">
 <p class="text-2xl font-bold dark:text-white">Brand</p>
</div>

<nav class="hidden dark:text-white lg:block">
  <a href="#" class="px-4 font-light hover:text-blue-400">New</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Clothing</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Sportswear</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Trending</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Brands</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">SALE</a>
</nav>

</div>

</header>`,
      title: "Navbar basic",
    };
  },
};
</script>

<style scoped></style>
