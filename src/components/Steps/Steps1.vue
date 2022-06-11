<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<div class="relative w-full h-1 max-w-xl mt-5 text-sm text-gray-500 bg-gray-300">
  <div class="absolute z-10 -mt-4 ml-[0%] h-9 w-9 rounded-full border-4 border-blue-400 bg-white pt-1 text-center">1</div>
  <div class="absolute z-10 -mt-4 ml-[20%] h-9 w-9 rounded-full border-4 border-blue-400 bg-white pt-1 text-center">2</div>
  <div class="absolute z-10 -mt-4 ml-[40%] h-9 w-9 rounded-full border-4 border-blue-400 bg-white pt-1 text-center">3</div>
  <div class="absolute z-10 -mt-4 ml-[60%] h-9 w-9 rounded-full border-4 border-gray-300 bg-white pt-1 text-center">4</div>
  <div class="absolute z-10 -mt-4 ml-[80%] h-9 w-9 rounded-full border-4 border-gray-300 bg-white pt-1 text-center">5</div>
  <div class="absolute z-10 -mt-4 ml-[100%] h-9 w-9 rounded-full border-4 border-gray-300 bg-white pt-1 text-center">6</div>
  <div class="absolute h-1 w-[40%] max-w-xl bg-blue-400"></div>
</div>

`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
