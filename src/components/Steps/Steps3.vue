<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Vertical",
  data() {
    return {
      code: `
<ul class="text-gray-500 dark:text-gray-200">
  <li class="flex items-center mb-3">
    <svg fill="rgb(59 130 246)" class="h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" /></svg>
    <p class="ml-4">Basket</p>
  </li>
  <li class="flex items-center mb-3">
    <span class="w-2 h-2 mx-2 bg-blue-500 rounded-full"></span>
    <p class="ml-4 text-blue-500">Billing</p>
  </li>
  <li class="flex items-center mb-3">
    <span class="w-2 h-2 mx-2 bg-gray-300 rounded-full"></span>
    <p class="ml-4">Delivery</p>
  </li>
  <li class="flex items-center mb-3">
    <span class="w-2 h-2 mx-2 bg-gray-300 rounded-full"></span>
    <p class="ml-4">Payment</p>
  </li>
  <li class="flex items-center mb-3">
    <span class="w-2 h-2 mx-2 bg-gray-300 rounded-full"></span>
    <p class="ml-4">Confirmation</p>
  </li>
</ul>
`,
      title: "Vertical",
    };
  },
};
</script>

<style scoped></style>
