<template>
  <button
    class="bg-blue-400 dark:bg-white px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default() {
        return "Button";
      },
    },
  },
};
</script>

<style scoped></style>
