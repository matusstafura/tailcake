<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Card with image vertical",
  data() {
    return {
      code: `
<div class="dark:text-white">
  <div class="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div class="rounded-lg shadow-xl dark:bg-gray-500">
      <a href="#" class="hover:text-blue-600 dark:text-blue-400">
        <img src="/images/blog/1.jpg" alt="thumbnail" class="w-full rounded-t-lg" />
        <div class="p-8">
          <div class="mb-2 text-sm text-gray-400 dark:text-gray-300">Business</div>
          <h2 class="mb-2 text-xl font-semibold md:text-2xl">Here are the 5 working steps on success</h2>
          <p class="mb-4 text-gray-600 dark:text-gray-200">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
        </div>
      </a>
    </div>
  </div>
</div>
`,
      title: "Card with image vertical",
    };
  },
};
</script>

<style scoped></style>
