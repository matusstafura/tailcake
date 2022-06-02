<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Card with image",
  data() {
    return {
      code: `
<section class="max-w-screen-md bg-white border rounded-lg shadow-lg border-gray-50 dark:text-gray-400">
  <div class="grid grid-cols-1 dark:bg-gray-500 lg:grid-cols-2">
    <div class="relative h-64 pb-2/3">
      <img src="https://tailcake.netlify.app/images/blog/3.jpg" alt="thumbnail" class="absolute bottom-0 object-cover w-full h-full rounded-l-lg" />
    </div>
    <div class="lg:px-6">
      <div class="my-3">
        <span class="px-3 py-1 text-sm text-gray-400 bg-gray-100 rounded">Ads</span>
      </div>
      <h4 class="block mb-2 text-2xl text-gray-600 dark:text-white">Freelance Writing</h4>
      <p class="mb-4 text-slate-500 dark:text-gray-100">If you have solid writing skills and can quickly get the hang of all kinds of different topics in a short amount of time, then you should definitely try freelance writing.</p>
      <a href="#" class="px-4 py-2 mr-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Try now</a>
    </div>
  </div>
</section>

`,
      title: "Card with image",
    };
  },
};
</script>

<style scoped></style>
