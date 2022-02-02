<template>
  <div v-html="component"></div>
  {{ component }}
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      component: `<button
    class="bg-blue-400 dark:bg-white px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700"
  >
    Button
  </button>`,
    };
  },
};
</script>

<style scoped></style>
