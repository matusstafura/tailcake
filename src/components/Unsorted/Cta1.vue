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
      code: `<section class="my-8 bg-white border border-gray-100 rounded-lg shadow-xl dark:bg-gray-500 dark:text-white">
<div class="grid grid-cols-1 p-8 lg:grid-cols-2">
  <div class="flex mb-4 text-center">
    <h3 class="m-auto text-4xl font-semibold">Ready to try our award winning service</h3>
  </div>
  <div class="m-auto text-center">
    <div class="mb-4">
      <button class="flex px-6 py-3 font-light text-white bg-green-400 rounded shadow-lg hover:bg-green-500">
        <span class="mx-1">Get Started Now</span>
      </button>
    </div>
    <a href="#" class="text-sm text-gray-400 underline hover:text-gray-500">Read details</a>
  </div>
</div>
</section>`,
      title: "Cta 1",
    };
  },
};
</script>

<style scoped></style>
