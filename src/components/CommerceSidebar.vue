<template>
  <div>
    <Element :mode="mode" :code="code"></Element>
  </div>
</template>

<script>
import Element from "./Element.vue";
export default {
  name: "CommerceSidebar",
  props: ["mode"],
  data() {
    return {
      code: `<div>

<!-- COLLECTIONS S -->
<div class="mb-6 dark:text-white"> 

<div>
<p class="mb-4 font-semibold tracking-widest uppercase">Collections</p>
</div>

<hr/ class="mb-4">

<ul class="font-light leading-9 text-gray-600 dark:text-white">
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

<div>
<p class="mb-4 font-semibold tracking-widest uppercase">Color</p>
</div>

<hr/ class="mb-4">

<ul class="flex font-light leading-9 text-gray-600 dark:text-white">
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
<div class="mb-6 dark:text-white"> 

<div>
<p class="mb-4 font-semibold tracking-widest uppercase">SIZE</p>
</div>

<hr/ class="mb-4">

<ul class="flex font-light leading-9 text-gray-600 dark:text-white">

<li class="w-8 mr-2 text-center bg-gray-100 rounded shadow dark:bg-gray-400 hover:bg-blue-200 dark:hover:bg-blue-300"><a href="#" class="block">XS</a></li>
<li class="w-8 mr-2 text-center bg-gray-100 rounded shadow dark:bg-gray-400 hover:bg-blue-200 dark:hover:bg-blue-300"><a href="#" class="block">S</a></li>
<li class="w-8 mr-2 text-center bg-gray-100 rounded shadow dark:bg-gray-400 hover:bg-blue-200 dark:hover:bg-blue-300"><a href="#" class="block">M</a></li>
<li class="w-8 mr-2 text-center bg-gray-100 rounded shadow dark:bg-gray-400 hover:bg-blue-200 dark:hover:bg-blue-300"><a href="#" class="block">L</a></li>
<li class="w-8 mr-2 text-center bg-gray-100 rounded shadow dark:bg-gray-400 hover:bg-blue-200 dark:hover:bg-blue-300"><a href="#" class="block">XL</a></li>


</ul>

</div>
<!-- SIZE E -->

<!-- TAGS S -->
<div class="mb-6 dark:text-white"> 

<div>
<p class="mb-4 font-semibold tracking-widest uppercase">TAGS</p>
</div>

<hr/ class="mb-4">

<ul class="flex font-light leading-9 text-gray-600 dark:text-white">

<li class="mr-2"><a href="#" class="hover:text-blue-400">summer</a></li>
<li class="mr-2"><a href="#" class="hover:text-blue-400">stripped</a></li>
<li class="mr-2"><a href="#" class="hover:text-blue-400">polo</a></li>
<li class="mr-2"><a href="#" class="hover:text-blue-400">trendy</a></li>
<li class="mr-2"><a href="#" class="hover:text-blue-400">hot</a></li>

</ul>

</div>
<!-- TAGS E -->

</div>`,
    };
  },
  components: { Element },
};
</script>

<style scoped></style>
