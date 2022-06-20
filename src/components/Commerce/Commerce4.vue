<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Product Overview",
  data() {
    return {
      code: `
<div>
  <div class="grid grid-cols-1 gap-x-20 lg:grid-cols-2">
    <div class="max-w-2xl"><img src="https://tailcake.netlify.app/images/commerce/a2.jpg" alt="" class="rounded-xl" /></div>
    <div class="max-w-2xl">
      <h1 class="text-4xl font-semibold tracking-wide text-slate-700">Retro Camera</h1>
      <p class="py-4 text-xl text-gray-500">$55.00</p>
      <p class="py-4 text-gray-500">Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <div class="mb-6 dark:text-white">
        <p class="pb-4 mb-4 font-semibold text-gray-600 uppercase border-b">Select color</p>

        <ul class="flex font-light leading-9 text-gray-600">
          <li class="mr-2 bg-white rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-yellow-500 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-red-500 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-orange-600 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-green-500 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-blue-500 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-gray-500 rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
          <li class="mr-2 bg-black rounded-full shadow"><a href="#" class="block w-8 h-8 rounded-full hover:shadow-lg"></a></li>
        </ul>
      </div>
      <!-- COLOR E -->
      <!-- SIZE S -->
      <div class="mb-6 dark:text-slate-200">
        <p class="pb-4 mb-4 font-semibold text-gray-600 uppercase border-b">SIZE</p>

        <ul class="flex font-light leading-9 text-gray-600 dark:text-slate-200">
          <li class="mr-2 text-center bg-gray-100 rounded-full shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block w-8">XS</a></li>
          <li class="mr-2 text-center bg-gray-100 rounded-full shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block w-8">S</a></li>
          <li class="mr-2 text-center bg-gray-100 rounded-full shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block w-8">M</a></li>
          <li class="mr-2 text-center bg-gray-100 rounded-full shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block w-8">L</a></li>
          <li class="mr-2 text-center bg-gray-100 rounded-full shadow hover:bg-blue-200 hover:text-blue-600 dark:bg-gray-400 dark:hover:bg-blue-300"><a href="#" class="block w-8">XL</a></li>
        </ul>
      </div>
      <!-- SIZE E -->

      <div class="flex py-3">
        <select name="qty" id="qty" class="w-16 px-4 mr-3 text-gray-500 border rounded-md">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <button class="flex items-center px-8 py-3 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">
          <svg class="w-5 mr-4" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" /></svg>
          <span class="text-lg">Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</div>

`,
      title: "Product Overview",
    };
  },
};
</script>

<style scoped></style>
