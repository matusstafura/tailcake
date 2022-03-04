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
<div class="w-full p-16 mx-auto text-center dark:text-white">

<div class="w-1/2 mx-auto">
  <img class="rounded-lg shadow-lg" src="images/content/2.jpg" alt="" />
</div>

<div class="w-1/2 py-16 m-auto">
<span class="font-semibold text-gray-500 uppercase">Wedding</span>
<h2 class="py-4 text-4xl font-semibold">Crucial Tips For Making Your Wedding Guest List</h2>

<div class="pb-4 leading-relaxed text-gray-500 dark:text-white">
Ab cumque corporis qui quibusdam recusandae aut commodi velit hic provident quas. Et consequatur maxime et aperiam quisquam et temporibus deserunt est facere sapiente qui autem assumenda est voluptas quas et similique.
</div>
<button class="px-6 py-3 font-bold text-white uppercase bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500">
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
