<template>
  <div>
    <h1 class="text-3xl py-4">Showcase</h1>
    <Button :mode="mode"></Button>
    <Blog :mode="mode"></Blog>
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
