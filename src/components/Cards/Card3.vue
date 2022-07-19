<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Card with image horizontal",
  data() {
    return {
      code: `
<section class="max-w-4xl bg-white rounded-lg drop-shadow-md dark:text-gray-400">
  <div class="grid grid-cols-1 dark:bg-gray-500 sm:grid-cols-2">
    <div class="relative h-64 pb-2/3">
      <img src="https://tailcake.netlify.app/images/blog/3.jpg" alt="thumbnail" class="absolute bottom-0 object-cover w-full h-full rounded-l-lg" />
    </div>
    <div class="p-6">
      <span class="px-3 py-1 mt-3 text-sm text-gray-400 bg-gray-100 rounded">Ads</span>
      <h4 class="block py-2 text-2xl text-gray-600 dark:text-white">Freelance Writing</h4>
      <div class="text-slate-500 dark:text-gray-100">If you have solid writing skills and can quickly get the hang of all kinds of different topics in a short amount of time, then you should definitely try freelance writing.</div>
      <div class="pt-6">
        <a href="#" class="px-6 py-3 bg-blue-600 rounded shadow-md text-blue-50 hover:bg-blue-500 dark:hover:bg-blue-400">Read more</a>
      </div>
    </div>
  </div>
</section>

`,
      title: "Card with image horizontal",
    };
  },
};
</script>

<style scoped></style>
