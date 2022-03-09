<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Product Grid",
  data() {
    return {
      code: `<div>

<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-white">

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

</div>

</div>`,
      title: "Product Grid",
    };
  },
};
</script>

<style scoped></style>
