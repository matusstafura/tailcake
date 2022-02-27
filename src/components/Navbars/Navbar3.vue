<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Navbar3",
  data() {
    return {
      code: `<header class="bg-gray-100 shadow dark:bg-gray-700">

<div class="flex items-center justify-start px-4 py-4">

<nav class="hidden dark:text-white lg:block">
<div class="flex items-center">
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">New
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">Clothing
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">Sportswear
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">Underwear
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">Trending
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
  <a href="#" class="flex p-2 px-4 font-bold rounded hover:bg-blue-300 hover:text-white">Brands
  <svg class="w-4 ml-3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
  </a>
<div>
</nav>

</div>

</header>`,
      title: "Navbar basic",
    };
  },
};
</script>

<style scoped></style>
