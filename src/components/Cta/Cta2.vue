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
      code: `
<section class="my-8 rounded-lg bg-gray-50 text-slate-700 dark:bg-gray-500 dark:text-white">
  <div class="grid grid-cols-1 p-8 lg:grid-cols-2">
    <div class="pr-4 my-auto">
      <h3 class="text-4xl font-semibold">Ready to try our award winning service</h3>
    </div>
    <div class="">
      <div class="w-full mb-2 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
        <input id="email" type="text" class="w-full px-4 py-2 my-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-400" placeholder="Email Address" />
        <button class="flex w-full px-6 py-3 font-light text-white bg-green-400 rounded shadow-lg hover:bg-blue-500">
          <span class="-mx-2">Get Started Now</span>
        </button>
      </div>
      <span class="text-sm text-gray-400">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</span>
    </div>
  </div>
</section>
`,
      title: "Cta 2",
    };
  },
};
</script>

<style scoped></style>
