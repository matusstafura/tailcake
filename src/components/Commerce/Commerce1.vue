<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Product Grid",
  data() {
    return {
      code: `
<div class="grid grid-cols-1 gap-x-8 gap-y-8 dark:text-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <div class="max-w-md">
    <div class="mb-4">
      <img src="https://tailcake.netlify.app/images/commerce/c1.jpg" />
    </div>
    <div class="leading-6 text-center">
      <h3 class="font-light text-slate-400">Bronski</h3>
      <p class="text-slate-700">Magic Pen</p>
      <p class="font-semibold">$320.00</p>
      <button class="px-6 py-2 mt-4 text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Add to cart</button>
    </div>
  </div>

  <div class="max-w-md">
    <div class="mb-4">
      <img src="https://tailcake.netlify.app/images/commerce/c2.jpg" />
    </div>
    <div class="leading-6 text-center">
      <h3 class="font-light text-slate-400">Amazon</h3>
      <p class="text-slate-700">Echo Devica Alexa</p>
      <p class="font-semibold">$320.00</p>
      <button class="px-6 py-2 mt-4 text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Add to cart</button>
    </div>
  </div>
  <div class="max-w-md">
    <div class="mb-4">
      <img src="https://tailcake.netlify.app/images/commerce/c3.jpg" />
    </div>
    <div class="leading-6 text-center">
      <h3 class="font-light text-slate-400">Microsoft</h3>
      <p class="text-slate-700">XBOX Controller</p>
      <p class="font-semibold">$320.00</p>
      <button class="px-6 py-2 mt-4 text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Add to cart</button>
    </div>
  </div>
  <div class="max-w-md">
    <div class="mb-4">
      <img src="https://tailcake.netlify.app/images/commerce/c4.jpg" />
    </div>
    <div class="leading-6 text-center">
      <h3 class="font-light text-slate-400">Nikon</h3>
      <p class="text-slate-700">Camera D750</p>
      <p class="font-semibold">$320.00</p>
      <button class="px-6 py-2 mt-4 text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Add to cart</button>
    </div>
  </div>
</div>


`,
      title: "Product Grid",
    };
  },
};
</script>

<style scoped></style>
