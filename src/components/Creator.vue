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
      sourceCode: `<header>
<div class="container flex p-4 mx-auto bg-white dark:bg-gray-700 dark:text-white">

<div  class="flex flex-auto">
<a href="#" class="flex">
<svg id="logo-14" width="73" height="32" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path> </svg>
<span class="text-2xl">Logo</span>
</a>
</div>

<div class="flex items-center">
<nav class="">
<a href="#">Home</a>
<a href="#">Faq</a>
<a href="#">Contact</a>
</nav>
</div>

</div>
</header>`,
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
