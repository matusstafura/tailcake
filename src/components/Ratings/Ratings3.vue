<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With count and progress bar",
  data() {
    return {
      code: `
<div>
  <div class="flex">
    <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <span class="ml-3 font-semibold dark:text-gray-100">4.1 out of 5</span>
  </div>
  <p class="py-3 text-slate-500 dark:text-gray-200">321 reviews</p>
  <ul>
    <li class="flex items-center py-1">
      <span class="dark:text-gray-200">5 star</span>
      <div class="relative mx-4 h-5 w-64">
        <div class="absolute z-10 h-5 w-[100%] rounded border border-gray-200 bg-gray-100"></div>
        <div class="absolute z-20 h-5 w-[84%] rounded-l border border-yellow-500 bg-[#ffa41d]"></div>
      </div>
      <a href="/reviews" class="text-blue-600 hover:underline dark:text-blue-300">84%</a>
    </li>
    <li class="flex items-center py-1">
      <span class="dark:text-gray-200">4 star</span>
      <div class="relative mx-4 h-5 w-64">
        <div class="absolute z-10 h-5 w-[100%] rounded border border-gray-200 bg-gray-100"></div>
        <div class="absolute z-20 h-5 w-[69%] rounded-l border border-yellow-500 bg-[#ffa41d]"></div>
      </div>
      <a href="/reviews" class="text-blue-600 hover:underline dark:text-blue-300">69%</a>
    </li>
    <li class="flex items-center py-1">
      <span class="dark:text-gray-200">3 star</span>
      <div class="relative mx-4 h-5 w-64">
        <div class="absolute z-10 h-5 w-[100%] rounded border border-gray-200 bg-gray-100"></div>
        <div class="absolute z-20 h-5 w-[51%] rounded-l border border-yellow-500 bg-[#ffa41d]"></div>
      </div>
      <a href="/reviews" class="text-blue-600 hover:underline dark:text-blue-300">51%</a>
    </li>
    <li class="flex items-center py-1">
      <span class="dark:text-gray-200">2 star</span>
      <div class="relative mx-4 h-5 w-64">
        <div class="absolute z-10 h-5 w-[100%] rounded border border-gray-200 bg-gray-100"></div>
        <div class="absolute z-20 h-5 w-[36%] rounded-l border border-yellow-500 bg-[#ffa41d]"></div>
      </div>
      <a href="/reviews" class="text-blue-600 hover:underline dark:text-blue-300">36%</a>
    </li>
    <li class="flex items-center py-1">
      <span class="dark:text-gray-200">1 star</span>
      <div class="relative mx-4 h-5 w-64">
        <div class="absolute z-10 h-5 w-[100%] rounded border border-gray-200 bg-gray-100"></div>
        <div class="absolute z-20 h-5 w-[11%] rounded-l border border-yellow-500 bg-[#ffa41d]"></div>
      </div>
      <a href="/reviews" class="text-blue-600 hover:underline dark:text-blue-300">11%</a>
    </li>
  </ul>
</div>


`,
      title: "With count and progress bar",
    };
  },
};
</script>

<style scoped></style>
