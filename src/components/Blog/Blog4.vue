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
<section>
  <div class="grid grid-cols-1 py-4 mx-auto max-w-8xl gap-x-16 gap-y-8 dark:text-white xl:grid-cols-2">
    <div class="w-1/2 mx-auto xl:w-full">
      <img class="border-8 border-white rounded-lg shadow-lg" src="/images/content/1.jpg" alt="blog-image" />
    </div>

    <div class="w-1/2 m-auto xl:w-full">
      <span class="font-semibold text-gray-500 uppercase dark:text-gray-50">Tutorial</span>
      <h2 class="py-4 text-2xl font-bold xl:text-4xl">How to write an essay</h2>

      <div class="pb-4 leading-relaxed text-gray-500 dark:text-gray-50">Ab cumque corporis qui quibusdam recusandae aut commodi velit hic provident quas. Et consequatur maxime et aperiam quisquam et temporibus deserunt est facere sapiente qui autem assumenda est voluptas quas et similique.</div>
      <button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500">Read More ...</button>
    </div>
  </div>

  <div class="grid grid-cols-1 py-4 mx-auto max-w-8xl gap-x-16 gap-y-8 dark:text-white xl:grid-cols-2">
    <div class="w-1/2 mx-auto xl:w-full">
      <img class="border-8 border-white rounded-lg shadow-lg" src="/images/content/2.jpg" alt="blog-image" />
    </div>

    <div class="w-1/2 m-auto xl:w-full">
      <span class="font-semibold text-gray-500 uppercase dark:text-gray-50">Tutorial</span>
      <h2 class="py-4 text-2xl font-bold xl:text-4xl">How to write an essay</h2>

      <div class="pb-4 leading-relaxed text-gray-500 dark:text-gray-50">Ab cumque corporis qui quibusdam recusandae aut commodi velit hic provident quas. Et consequatur maxime et aperiam quisquam et temporibus deserunt est facere sapiente qui autem assumenda est voluptas quas et similique.</div>
      <button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500">Read More ...</button>
    </div>
  </div>
</section>

`,
      title: "Vertical",
    };
  },
};
</script>

<style scoped></style>
