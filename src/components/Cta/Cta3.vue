<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic justified WIP",
  data() {
    return {
      code: `
<!-- 
  1, install plugin
  npm install -D @tailwindcss/forms 
  2, add to tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
-->
<div class="py-10 bg-blue-50">
  <div class="max-w-4xl mx-auto text-center">
    <div class="mb-8 text-blue-500 uppercase">ANALYZE NOW</div>
    <div class="mb-12 text-5xl font-light">Wonder how much faster your website can go? Easily check your SEO Score now.</div>
    <div class="relative rounded-md">
      <div class="">
        <input type="text" id="url" class="w-1/2 p-4 mx-auto placeholder-gray-400 bg-white rounded-l shadow text-slate-700" placeholder="Enter URL" />
        <button class="px-12 py-4 -ml-1 font-semibold text-white bg-blue-400 border rounded-r">Submit</button>
      </div>
    </div>
  </div>
</div>
`,
      title: "Basic justified WIP",
    };
  },
};
</script>

<style scoped></style>
