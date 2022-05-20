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
      code: `<section class="mx-auto bg-white dark:bg-gray-600 xl:max-w-screen-md dark:text-white">
  <div class="grid grid-cols-1 p-3 mx-auto mb-4 rounded-lg shadow-lg lg:grid-cols-2 dark:bg-gray-500">
    <div class="relative h-64 pb-2/3">
      <img src="/images/blog/3.jpg" alt="thumbnail" class="absolute bottom-0 object-cover w-full h-full rounded-lg" />
    </div>
    <div class="pt-4 lg:px-8">
      <div class="pb-4">
        <a href="#" class="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded">Ads</a>
      </div>
      <div class="mb-4">
        <a href="#" class="block text-2xl text-gray-600 dark:text-white hover:underline pointer">Getting to Grips with Digital Advertising</a>
      </div>
      <p class="text-gray-400 dark:text-gray-100">Lorem markdownum transitque nondum, Peliaeque at poterat exegit, urbis quo; tibi.</p>
    </div>
  </div>
</section>`,
      title: "Card with image",
    };
  },
};
</script>

<style scoped></style>
