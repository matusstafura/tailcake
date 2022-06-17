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
<div class="relative h-64">
  <div class="absolute left-7 mb-8 flex h-[80%] border-l-2 border-blue-500">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-blue-500 rounded-full"></div>
    </div>
    <div class="mt-1 text-sm leading-4 dark:text-gray-300">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
  <div class="absolute left-7 top-[25%] mb-8 flex h-[25%] border-l-2 border-gray-300">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-blue-500 rounded-full"></div>
    </div>
    <div class="mt-1 text-sm leading-4 dark:text-gray-300">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
  <div class="absolute left-7 top-[50%] mb-8 flex h-[25%] border-l-2 border-gray-300">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-white border border-gray-300 rounded-full"></div>
    </div>
    <div class="mt-1 text-sm leading-4 dark:text-gray-300">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
  <div class="absolute left-7 top-[75%] mb-8 flex border-l-2 border-gray-300">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-white border border-gray-300 rounded-full">
        <div class="w-3 h-3 mt-3 ml-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
    <div class="mt-1 text-sm leading-4 dark:text-gray-300">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
</div>
`,
      title: "Vertical",
    };
  },
};
</script>

<style scoped></style>
