<template>
  <div>
    <Element :mode="mode" :code="code"></Element>
  </div>
</template>

<script>
import Element from "./Element.vue";
export default {
  name: "Button",
  props: ["mode"],
  data() {
    return {
      code: `<div>

<div class="flex grid grid-cols-4 gap-x-8 gap-y-8">

<div class="">
<a href="#" class="hover:text-blue-500"><img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/TailoredFitMesh-PanelPolo_4_560x.jpg?v=1626266062" />
<div class="mt-4">
  <h3>Shirt</h3>
  <p class="text-sm text-gray-500">Navy Blue</p>
  <p class="text-xl">1220kr</p>
</div>
</a>
</div>

<div class="">
<a href="#" class="hover:text-blue-500"><img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Relaxed-FitCottonShirt_4_560x.jpg?v=1626266842" />
<div class="mt-4">
  <h3>Shirt</h3>
  <p class="text-sm text-gray-500">Navy Blue</p>
  <p class="text-xl">1220kr</p>
</div>
</a>
</div>

<div class="">
<a href="#" class="hover:text-blue-500"><img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/TailoredFitMesh-PanelPolo_4_560x.jpg?v=1626266062" />
<div class="mt-4">
  <h3>Shirt</h3>
  <p class="text-sm text-gray-500">Navy Blue</p>
  <p class="text-xl">1220kr</p>
</div>
</a>
</div>

<div class="">
<a href="#" class="hover:text-blue-500"><img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/TailoredFitMesh-PanelPolo_4_560x.jpg?v=1626266062" />
<div class="mt-4">
  <h3>Shirt</h3>
  <p class="text-sm text-gray-500">Navy Blue</p>
  <p class="text-xl">1220kr</p>
</div>
</a>
</div>

<div class="">
<a href="#" class="hover:text-blue-500"><img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/TailoredFitMesh-PanelPolo_4_560x.jpg?v=1626266062" />
<div class="mt-4">
  <h3>Shirt</h3>
  <p class="text-sm text-gray-500">Navy Blue</p>
  <p class="text-xl">1220kr</p>
</div>
</a>
</div>

</div>

</div>`,
    };
  },
  components: { Element },
};
</script>

<style scoped></style>
