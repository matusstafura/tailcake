<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Commerce filter",
  data() {
    return {
      code: `
<div class="max-w-md p-4 bg-slate-50 dark:bg-slate-700">
  <!-- COLLECTIONS S -->
  <div class="mb-6">
    <p class="pb-4 mb-4 font-semibold tracking-widest uppercase border-b dark:text-slate-200">Collections</p>

    <ul class="font-light leading-9 text-gray-600 dark:text-slate-400">
      <li><a href="#" class="block hover:text-blue-400">Jeans</a></li>
      <li><a href="#" class="block hover:text-blue-400">Polo</a></li>
      <li><a href="#" class="block hover:text-blue-400">Shirts</a></li>
      <li><a href="#" class="block hover:text-blue-400">Shoes</a></li>
      <li><a href="#" class="block hover:text-blue-400">Underwear</a></li>
      <li><a href="#" class="block hover:text-blue-400">T-shirts</a></li>
    </ul>
  </div>
  <!-- COLLECTIONS E -->

  <!-- COLOR S -->
  <div class="mb-6 dark:text-white">
    <p class="pb-4 mb-4 font-semibold tracking-widest uppercase border-b">Color</p>

    <ul class="flex font-light leading-9 text-gray-600">
      <li class="w-8 h-8 mr-2 bg-white rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-yellow-500 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-red-500 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-orange-600 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-green-500 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-blue-500 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-gray-500 rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
      <li class="w-8 h-8 mr-2 bg-black rounded shadow"><a href="#" class="block w-8 h-8 hover:shadow-lg"></a></li>
    </ul>
  </div>
  <!-- COLOR E -->
  <!-- SIZE S -->
  <div class="mb-6 dark:text-slate-200">
    <p class="pb-4 mb-4 font-semibold tracking-widest uppercase border-b">SIZE</p>

    <ul class="flex font-light leading-9 text-gray-600 dark:text-slate-200">
      <li class="w-8 mr-2 text-center bg-gray-100 rounded shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block">XS</a></li>
      <li class="w-8 mr-2 text-center bg-gray-100 rounded shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block">S</a></li>
      <li class="w-8 mr-2 text-center bg-gray-100 rounded shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block">M</a></li>
      <li class="w-8 mr-2 text-center bg-gray-100 rounded shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block">L</a></li>
      <li class="w-8 mr-2 text-center bg-gray-100 rounded shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block">XL</a></li>
    </ul>
  </div>
  <!-- SIZE E -->

  <!-- TAGS S -->
  <div class="mb-6 dark:text-slate-200">
    <p class="pb-4 mb-4 font-semibold tracking-widest uppercase border-b">TAGS</p>

    <ul class="flex font-light leading-9 text-gray-600 dark:text-slate-400">
      <li class="mr-2"><a href="#" class="hover:text-blue-400">summer</a></li>
      <li class="mr-2"><a href="#" class="hover:text-blue-400">stripped</a></li>
      <li class="mr-2"><a href="#" class="hover:text-blue-400">polo</a></li>
      <li class="mr-2"><a href="#" class="hover:text-blue-400">trendy</a></li>
      <li class="mr-2"><a href="#" class="hover:text-blue-400">hot</a></li>
    </ul>
  </div>
  <!-- TAGS E -->

  <!-- SLIDER S -->
  <div class="mb-6 dark:text-slate-200">
    <p class="pb-4 mb-4 font-semibold tracking-widest uppercase border-b">PRICE</p>

    <div class="flex font-light leading-9 text-gray-600 font-blue-200 dark:text-slate-400">
      10
      <input type="range" class="mx-4 cursor-pointer" />
      100
    </div>
  </div>
  <!-- SLIDER E -->
</div>
`,
      title: "Commerce filter",
    };
  },
};
</script>
