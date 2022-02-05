<template>
  <element-view :title="title" :code="code"></element-view>
</template>

<script>
import ElementView from "./ElementView.vue";
export default {
  components: { ElementView },
  name: "Button2",
  data() {
    return {
      code: `<button class="bg-blue-400 dark:bg-white dark:text-black px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700">
  Button
</button>`,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
