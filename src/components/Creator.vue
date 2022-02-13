<template>
  <div>
    <button @click="darkMode" class="ml-4">Dark Mode</button>
    <div class="px-4 py-6 my-4" :class="dark ? 'dark bg-gray-600' : ''">
      <p v-html="sourceCode"></p>
    </div>
    <!-- <p>{{ sourceCode }}</p> -->
    <hr class="w-full my-4" />
    <div class="bt-2">
      <textarea
        rows="5"
        cols="40"
        v-model="sourceCode"
        class="w-full h-screen p-4 text-xl border border-gray-300 rounded w-128"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: "",
      component: "Creator",
      sourceCode: `<div>

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

</div> `,
    };
  },
  methods: {
    someText() {
      this.sourceCode;
    },
    darkMode() {
      this.dark = !this.dark;
    },
  },
};
</script>

<style scoped>
textarea {
  font-family: "Inconsolata";
  font-size: 16px;
  background-color: #f5f5f5;
}
</style>
