<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Wip",
  data() {
    return {
      code: `
<div class="flex justify-between py-4 px-8 text-[0.9rem]">
  <nav class="hidden lg:flex">
    <ul class="flex font-semibold gap-x-2">
      <li><a href="#" class="px-4 py-[0.4rem] hover:bg-slate-200 rounded-3xl">Home</a></li>
      <li><a href="#" class="px-4 py-[0.4rem] hover:bg-slate-200 rounded-3xl">Payments</a></li>
      <li><span class="px-4 py-[0.4rem] bg-blue-400 text-white rounded-3xl">Balances</span></li>
      <li><a href="#" class="px-4 py-[0.4rem] hover:bg-slate-200 rounded-3xl">Customers</a></li>
      <li><a href="#" class="px-4 py-[0.4rem] hover:bg-slate-200 rounded-3xl">Products</a></li>
    </ul>
  </nav>
  <div class="flex">
    <a href="#" class="hidden mr-3 text-slate-600 hover:underline lg:flex">Developer</a>
    <a href="#" class="hidden text-slate-600 hover:underline lg:flex">Test mode</a>
  </div>
</div>
`,
      title: "Wip",
    };
  },
};
</script>

<style scoped></style>
