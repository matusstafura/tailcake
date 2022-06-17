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
  <div>
    <img src="https://tailcake.netlify.app/images/commerce/3.jpg" />
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">Shirt</a>
      <p class="text-sm text-gray-500 dark:text-gray-300">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <img src="https://tailcake.netlify.app/images/commerce/4.jpg" />
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">Shirt</a>
      <p class="text-sm text-gray-500 dark:text-gray-300">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <img src="https://tailcake.netlify.app/images/commerce/5.jpg" />
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">Shirt</a>
      <p class="text-sm text-gray-500 dark:text-gray-300">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <img src="https://tailcake.netlify.app/images/commerce/6.jpg" />
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">Shirt</a>
      <p class="text-sm text-gray-500 dark:text-gray-300">Navy Blue</p>
      <p class="text-xl">1220kr</p>
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
