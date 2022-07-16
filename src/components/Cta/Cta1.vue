<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic justified",
  data() {
    return {
      code: `
<section class="my-8 rounded-lg bg-gray-50 dark:bg-gray-500 dark:text-white">
  <div class="p-8 xl:flex md:justify-between">
    <h3 class="my-2 text-3xl font-bold">Ready to try our award winning service</h3>
    <div class="flex mt-4 font-light lg:my-auto">
      <a href="#" class="px-6 py-3 bg-blue-600 rounded shadow-md text-blue-50 hover:bg-gray-500 dark:hover:bg-blue-400 dark:bg-blue-500">Read more</button>
      <a href="#" class="px-6 py-3 ml-3 text-blue-600 bg-white rounded shadow-lg hover:text-blue-500 dark:hover:bg-blue-300 dark:bg-blue-200 dark:text-blue-500">Read details</a>
    </div>
  </div>
</section>
`,
      title: "Basic justified",
    };
  },
};
</script>

<style scoped></style>
