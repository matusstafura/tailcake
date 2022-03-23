<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Blocks with image",
  data() {
    return {
      image: "1.jpg",
      title: "Blocks with images",
      code: `<section>
  <div class="container p-8 dark:text-white">
    <div class="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div class="bg-gray-100 dark:bg-gray-500">
        <img src="/images/blog/1.jpg" + alt="thumbnail" class="w-full" />
        <div class="p-8">
          <div class="mb-2 font-bold text-gray-400 uppercase dark:text-gray-700">Category</div>
          <h2 class="mb-2 text-2xl">Title</h2>
          <p class="mb-4 text-gray-600 dark:text-gray-200">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
          <a href="#" class="text-blue-600 dark:text-blue-400">Read more</a>
        </div>
      </div>
      <div class="bg-gray-100 dark:bg-gray-500">
        <img src="/images/blog/2.jpg" alt="thumbnail" class="w-full" />
        <div class="p-8">
          <div class="mb-2 font-bold text-gray-400 uppercase dark:text-gray-700">Category</div>
          <h2 class="mb-2 text-2xl">Title</h2>
          <p class="mb-4 text-gray-600 dark:text-gray-200">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
          <a href="#" class="text-blue-600 dark:text-blue-400">Read more</a>
        </div>
      </div>
      <div class="bg-gray-100 dark:bg-gray-500">
        <img src="/images/blog/3.jpg" alt="thumbnail" class="w-full" />
        <div class="p-8">
          <div class="mb-2 font-bold text-gray-400 uppercase dark:text-gray-700">Category</div>
          <h2 class="mb-2 text-2xl">Title</h2>
          <p class="mb-4 text-gray-600 dark:text-gray-200">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
          <a href="#" class="text-blue-600 dark:text-blue-400">Read more</a>
        </div>
      </div>
    </div>
  </div>
</section>`,
    };
  },
};
</script>
