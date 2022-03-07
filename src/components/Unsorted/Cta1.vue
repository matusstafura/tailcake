<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Cta 1",
  data() {
    return {
      code: `<section class="m-8 bg-white border rounded-lg shadow-xl border-gray-50 dark:bg-gray-500 dark:text-white">

<div class="flex p-8">
  <div class="flex w-8/12">
    <h3 class="m-auto text-4xl font-semibold">Ready to try our award winning service</h3>
  </div>
  <div class="m-auto text-center">
    <div class="mb-4">
    <button class="flex px-6 py-3 font-light text-white bg-green-400 rounded shadow-lg hover:bg-blue-500">
      <span class="mx-1">Get Started Now</span>
    </button>
    </div>
    <a href="#" class="text-sm text-gray-400 underline">Read details</a>
  </div>
</div>
</section>`,
      title: "Cta 1",
    };
  },
};
</script>

<style scoped></style>
