<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Footer",
  data() {
    return {
      code: `<footer>
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
      title: "Footer",
    };
  },
};
</script>

<style scoped></style>
