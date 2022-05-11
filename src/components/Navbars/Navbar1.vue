<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With burger",
  data() {
    return {
      code: `<header class="bg-gray-100 shadow dark:bg-gray-700">

<div class="flex items-center justify-between px-4 py-4">

<div>
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

<nav class="block dark:text-white lg:hidden">
  <button>
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
</nav>

</div>

</header>`,
      title: "With burger",
    };
  },
};
</script>

<style scoped></style>
