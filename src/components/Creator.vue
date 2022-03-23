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
      sourceCode: `<div>
</div>`,
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
  font-size: 12px;
  background-color: #f5f5f5;
}
</style>
