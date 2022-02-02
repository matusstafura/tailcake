<template>
  <div>
    <h1 class="text-3xl py-4">Showcase</h1>
    <p v-show="mode"><Button></Button></p>
    <Blog></Blog>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Blog from "./Blog.vue";
export default {
  props: ["mode"],
  components: { Button, Blog },
};
</script>

<style scoped></style>
