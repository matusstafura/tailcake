<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With burger and notification",
  data() {
    return {
      code: `
<div class="max-w-8xl">
  <div class="flex items-end w-full px-8 py-4 bg-slate-50 dark:bg-slate-900">
    <div class="flex">
      <a href="/" class="flex"
        ><div class="mr-4"><img src="/tailcake-logo.png" class="h-6" /></div>
        <div class="m-auto text-xl font-semibold dark:text-slate-100">TailCake</div></a
      >
    </div>
    <a href="#" class="hidden px-4 py-1 ml-8 text-sm text-green-600 bg-green-200 rounded-lg xl:flex">here goes an important notification with link</a>
    <div class="hidden ml-auto lg:flex">
      <nav>
        <ul class="flex space-x-8 font-semibold text-slate-700 dark:text-slate-100">
          <li><a href="#" class="hover:text-blue-400">Docs</a></li>
          <li><a href="#" class="hover:text-blue-400">Blog</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="ml-auto flex border-slate-900/10 dark:border-slate-50/[0.06] lg:hidden">
      <button type="button" class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
        <span class="sr-only">Navigation</span>
        <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
      </button>
    </div>
  </div>
</div>
`,
      title: "With burger and notification",
    };
  },
};
</script>

<style scoped></style>
