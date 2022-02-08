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
<li>Jeans</li>
<li>Polo</li>
<li>Shirts</li>
<li>Shoes</li>
<li>Underwear</li>
<li>T-shirts</li>
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
<li class="w-8 h-8 mr-2 bg-white rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-yellow-500 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-red-500 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-orange-600 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-green-500 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-blue-500 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-gray-500 rounded shadow"></li>
<li class="w-8 h-8 mr-2 bg-black rounded shadow"></li>

</ul>

</div>
<!-- COLOR E -->

</div>`,
    };
  },
  components: { Element },
};
</script>

<style scoped></style>
