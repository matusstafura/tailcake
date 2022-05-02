<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Alert with close button",
  data() {
    return {
      code: `<div class="flex justify-between w-full py-4 px-6 text-sm text-gray-700 bg-green-200">
  <div class="flex">
    <div class="m-auto">

    <svg class="mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16" width="16">
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
    </svg>
    
    </div>
    <p>Product successfully added to cart</p>
  </div>

  <button class="transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>`,
      title: "Alert with close button",
    };
  },
};
</script>

<style scoped></style>
