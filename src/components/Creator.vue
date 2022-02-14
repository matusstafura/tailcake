<template>
  <div>
    <button @click="darkMode" class="ml-4">Dark Mode</button>
    <div class="py-6 my-4" :class="dark ? 'dark bg-gray-600' : ''">
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
      sourceCode: `<nav class="bg-gray-100 shadow dark:bg-gray-700">

<div class="flex items-center justify-between px-4 py-4">

<div class="">
 <p class="text-2xl font-bold dark:text-white">Brand</p>
</div>

<div class="hidden dark:text-white lg:block">
  <a href="#" class="px-4 font-light hover:text-blue-400">New</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Clothing</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Sportswear</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Trending</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">Brands</a>
  <a href="#" class="px-4 font-light hover:text-blue-400">SALE</a>
</div>

</div>

</nav>`,
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
