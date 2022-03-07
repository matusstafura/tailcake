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
      code: `<section>
  <div class="container">
    <div class="grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      
      <div class="p-4">
        <div class="bg-gray-100">
          <img src="/images/blog/1.jpg" + alt="thumbnail" class="w-full" />
          <div class="p-8">
            <div class="mb-2 font-bold text-gray-400 uppercase">Category</div>
            <h2 class="mb-2 text-2xl">Title</h2>
            <p class="mb-4 text-gray-600">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
            <a href="#" class="text-blue-600">Read more</a>
          </div>
        </div>
      </div>

      <div class="p-4">
        <div class="bg-gray-100">
          <img src="/images/blog/2.jpg" alt="thumbnail" class="w-full" />
          <div class="p-8">
            <div class="mb-2 font-bold text-gray-400 uppercase">Category</div>
            <h2 class="mb-2 text-2xl">Title</h2>
            <p class="mb-4 text-gray-600">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
            <a href="#" class="text-blue-600">Read more</a>
          </div>
        </div>
      </div>

      <div class="p-4">
        <div class="bg-gray-100">
          <img src="/images/blog/3.jpg" alt="thumbnail" class="w-full" />
          <div class="p-8">
            <div class="mb-2 font-bold text-gray-400 uppercase">Category</div>
            <h2 class="mb-2 text-2xl">Title</h2>
            <p class="mb-4 text-gray-600">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
            <a href="#" class="text-blue-600">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      title: "Blocks with images",
    };
  },
};
</script>

<style scoped></style>
