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
      sourceCode: `<footer>
<div class="container flex mx-auto">
  <div class="flex flex-grow w-full">

    <div class="w-1/4">
      <h3 class="mb-4">About us</h3>
      <nav class="text-sm font-light text-gray-700 list-none">
        <li class="mb-2"><a href="#">Company</a></li>
        <li class="mb-2"><a href="#">Company</a></li>
        <li class="mb-2"><a href="#">Company</a></li>
        <li class="mb-2"><a href="#">Company</a></li>
      </nav>
    </div>

    <div class="w-1/4">
      <h3>Services</h3>
    </div>

    <div class="w-1/4">
      <h3>About us</h3>
    </div>

    <div class="w-1/4">
      <h3>Contact us</h3>
    </div>

</div>
</footer>`,
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
