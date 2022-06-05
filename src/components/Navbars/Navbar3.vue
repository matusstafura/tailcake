<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "App menu",
  data() {
    return {
      code: `
<div class="flex justify-between items-center py-4 text-[0.9rem] dark:text-white font-medium">
  <nav class="hidden lg:flex">
    <ul class="flex gap-x-2">
      <li><a href="#" class="rounded-3xl px-4 py-[0.4rem] hover:bg-slate-200 dark:hover:text-slate-700">Home</a></li>
      <li><a href="#" class="rounded-3xl px-4 py-[0.4rem] hover:bg-slate-200 dark:hover:text-slate-700">Payments</a></li>
      <li><span class="rounded-3xl bg-blue-400 px-4 py-[0.4rem] text-white">Balances</span></li>
      <li><a href="#" class="rounded-3xl px-4 py-[0.4rem] hover:bg-slate-200 dark:hover:text-slate-700">Customers</a></li>
      <li><a href="#" class="rounded-3xl px-4 py-[0.4rem] hover:bg-slate-200 dark:hover:text-slate-700">Products</a></li>
    </ul>
  </nav>
  <div class="flex items-center pr-4 text-gray-900"> 
    <a href="#" class="rounded-3xl px-4 py-[0.4rem] hover:bg-slate-200 dark:hover:text-slate-700">Settings</a>
    <div class="flex items-center">
      <p class="mx-2 dark:text-gray-300">Developer</p>
      <label for="default-toggle" class="relative inline-flex cursor-pointer">
        <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
        <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-green-800"></div>
      </label>
    </div>
  </div>
</div>
`,
      title: "App menu",
    };
  },
};
</script>

<style scoped></style>
