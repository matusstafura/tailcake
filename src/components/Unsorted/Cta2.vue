<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Cta 2",
  data() {
    return {
      code: `<section class="m-8 bg-white border rounded-lg shadow-xl border-gray-50 dark:bg-gray-500 dark:text-white">

<div class="flex p-8">
  <div class="flex w-8/12">
    <h3 class="m-auto text-4xl font-semibold">Ready to try our award winning service</h3>
  </div>
  <div class="">
    <div class="flex mb-2">
    <input id="email" type="text" class="px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address">
    <button class="flex px-6 py-3 font-light text-white bg-green-400 rounded shadow-lg hover:bg-blue-500">
      <span class="mx-1">Get Started Now</span>
    </button>
    </div>
    <span class="text-sm text-gray-400">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</span>
  </div>
</div>

</section>`,
      title: "Cta 2",
    };
  },
};
</script>

<style scoped></style>
