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
      code: `<section class="w-2/3 mx-auto dark:text-white">
<div class="grid grid-cols-1 p-3 mx-auto mb-4 border border-gray-100 rounded-lg shadow-lg lg:grid-cols-2 dark:bg-gray-500">

<div class="relative h-64 pb-2/3">
  <img src="/images/blog/3.jpg" alt="thumbnail" class="absolute bottom-0 object-cover w-full h-full rounded-lg" />
</div>

<div class="pt-4 lg:px-8">
  <div class="pb-4">
    <a href="#" class="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded">Ads</a>
  </div>
  <div class="mb-4">
    <a href="#" class="block text-2xl text-gray-600 hover:underline pointer">Getting to Grips with Digital Advertising</a>
  </div>
  <p class="text-gray-400">Lorem markdownum transitque nondum, Peliaeque at poterat exegit, urbis quo; tibi.</p>
</div>

</div>
</section>`,
      title: "Blocks with images",
    };
  },
};
</script>

<style scoped></style>
