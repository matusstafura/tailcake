<template>
  <div :class="dark ? 'dark' : ''">
    <div class="flex justify-between mb-4">
      <h2 class="justify-start text-xl font-semibold">{{ title }}</h2>
      <div class="mt-0">
        <button>RTA(if true)</button>
        <button @click="showCode" class="ml-4">Show Code</button>
        <button @click="darkMode" class="ml-4">Dark Mode</button>
        <button class="ml-4">Copy Code</button>
      </div>
    </div>
    <div class="flex p-10 bg-gxray-100 language-html dark:bg-gray-600">
      <div v-html="code"></div>
    </div>
    <div v-show="active">
      <highlightjs language="js" :code="code" class="text-sm" />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["title", "code"],
  data() {
    return {
      active: false,
      dark: "",
    };
  },
  methods: {
    showCode() {
      this.active = !this.active;
    },
    darkMode() {
      this.dark = !this.dark;
    },
  },
};
</script>

<style></style>
