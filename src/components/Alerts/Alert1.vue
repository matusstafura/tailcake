<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Success alert",
  data() {
    return {
      code: `<div class="flex justify-between w-full px-8 py-4 text-sm text-gray-700 bg-green-200">
  <div class="flex">
    <svg class="h-3 mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
    </svg>
    <p>Product successfully added to cart</p>
  </div>

  <button class="transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>`,
      title: "Success alert",
    };
  },
};
</script>

<style scoped></style>
