<template>
  <div>
    <h1 class="text-3xl py-4">Showcase</h1>
    <Button :mode="mode"></Button>
    <!-- <Blog :mode="mode"></Blog> -->
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["mode"],
  components: { Button },
};
</script>

<style scoped></style>
