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
      <!-- <svg fill="rgb(59 130 246)" class="h-8 -ml-5" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" /></svg> -->
    </div>
    <div class="text-sm leading-4">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
  <div class="absolute left-7 top-[25%] mb-8 flex h-[25%] border-l-2 border-gray-300">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-blue-500 rounded-full"></div>
    </div>
    <div class="text-sm leading-4">
      <p class="">HEADLINE</p>
      <p>some text</p>
    </div>
  </div>
  <div class="absolute left-7 top-[50%] mb-8 flex h-[25%] border-l-2 border-gray-300">
    <div class="pr-4">
      <div class="w-10 h-10 -ml-5 bg-white border border-gray-300 rounded-full"></div>
    </div>
    <div class="text-sm leading-4">
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
    <div class="text-sm leading-4">
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
