<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<div class="block p-4 gap-x-6 lg:flex dark:text-gray-200">
  <div class="w-1/4 pt-4 pb-3 text-sm border-t-4 border-blue-600 lg:0 dark:border-blue-300">
    <p class="font-semibold text-blue-600 uppercase dark:text-blue-300">step 1</p>
    <p class="capitalize">Purchase</p>
  </div>
  <div class="w-1/4 pt-4 pb-3 text-sm border-t-4 border-blue-600 lg:0 dark:border-blue-300">
    <p class="font-semibold text-blue-600 uppercase dark:text-blue-300">step 2</p>
    <p class="capitalize">Confirmation</p>
  </div>
  <div class="w-1/4 pt-4 pb-3 text-sm border-t-4 border-gray-300 lg:0">
    <p class="font-semibold text-gray-600 uppercase dark:text-white">step 3</p>
    <p class="capitalize">Shipping</p>
  </div>
  <div class="w-1/4 pt-4 pb-3 text-sm border-t-4 border-gray-300 lg:0">
    <p class="font-semibold text-gray-600 uppercase dark:text-white">step 4</p>
    <p class="capitalize">Completed</p>
  </div>
</div>

`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
