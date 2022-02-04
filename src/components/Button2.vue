<template>
  <div name="buttonName" :class="dark ? 'dark' : ''">
    <div class="flex mb-4 justify-between">
      <h2 class="text-xl font-semibold justify-start">{{ title }}</h2>
      <div class="mt-0">
        <button @click="showCode">Show Code</button>
        <button @click="darkMode" class="ml-4">Dark Mode</button>
      </div>
    </div>
    <div class="bg-gray-100 p-10 flex">
      <div v-html="code"></div>
    </div>
    <div v-show="active">
      <pre>
        <code>
          {{ code }}
        </code>
      </pre>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Button2",
  data() {
    return {
      code: `
<button class="bg-blue-400 dark:bg-white dark:text-black px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700" > 
  Button
</button>`,
      active: false,
      dark: "",
      title: "Testing Button",
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

<style scoped></style>
