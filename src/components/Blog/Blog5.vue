<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Hero block center",
  data() {
    return {
      code: `<section>
<div class="w-full mx-auto text-center xl:w-1/2 dark:text-white">

<div class="m-auto">
  <img class="mx-auto rounded-lg shadow-lg" src="images/content/2.jpg" alt="" />
</div>

<div class="py-8 m-auto">
<span class="font-semibold text-gray-500 uppercase dark:text-gray-100">Wedding</span>
<h2 class="py-4 text-4xl font-semibold">Crucial Tips For Making Your Wedding Guest List</h2>

<div class="pb-4 leading-relaxed text-gray-500 dark:text-gray-100">
Ab cumque corporis qui quibusdam recusandae aut commodi velit hic provident quas. Et consequatur maxime et aperiam quisquam et temporibus deserunt est facere sapiente qui autem assumenda est voluptas quas et similique.
</div>
<button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg hover:bg-blue-500">
  Read More ...
</button>
</div>

</div>
</section>`,
      title: "Hero block center",
    };
  },
};
</script>

<style scoped></style>
