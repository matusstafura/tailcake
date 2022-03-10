<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Hero block simple",
  data() {
    return {
      code: `<section>
<div class="grid grid-cols-1 px-8 mx-auto gap-x-16 gap-y-8 xl:grid-cols-2 dark:text-white">

<div class="mx-auto">
  <img class="border-8 border-white rounded-lg shadow-lg" src="images/content/1.jpg" alt="" />
</div>

<div class="my-auto">
  <span class="font-semibold text-gray-500 uppercase dark:text-gray-50">Tutorial</span>
  <h2 class="py-4 text-4xl font-bold">How to write an essay</h2>
  
  <div class="pb-4 pr-16 leading-relaxed text-gray-500 dark:text-gray-50">
  Ab cumque corporis qui quibusdam recusandae aut commodi velit hic provident quas. Et consequatur maxime et aperiam quisquam et temporibus deserunt est facere sapiente qui autem assumenda est voluptas quas et similique.
  </div>
  <button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500">
    Read More ...
  </button>
</div>


</div>
</section>`,
      title: "Hero block simple",
    };
  },
};
</script>

<style scoped></style>
