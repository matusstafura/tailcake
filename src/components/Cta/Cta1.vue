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
    <div class="flex mt-4 lg:my-auto">
      <a href="#" class="px-6 py-3 font-light text-white bg-green-400 rounded shadow-lg hover:bg-green-500">Get Started Now</a>
      <a href="#" class="px-6 py-3 ml-3 font-light text-green-400 bg-white rounded shadow-lg hover:text-green-500">Read details</a>
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
