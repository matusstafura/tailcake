<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<div class="max-w-sm p-8 h-[500px] bg-slate-50 dark:bg-gray-700">
  <ul>
    <li class="mb-8">
      <h5 class="mb-3 font-semibold capitalize dark:text-slate-200">Payments</h5>
      <ul class="text-[0.94rem] leading-8 text-slate-600 dark:text-slate-400">
        <li class="pl-4 border-l-2 hover:border-blue-300"><a href="#" class="block hover:text-blue-500">All Payments</a></li>
        <li class="pl-4 border-l-2 hover:border-blue-300"><a href="#" class="block hover:text-blue-500">Cancelled</a></li>
        <li class="pl-4 border-l-2 hover:border-blue-300"><a href="#" class="block hover:text-blue-500">Refunded</a></li>
      </ul>
    </li>
    <li class="mb-8">
      <h5 class="mb-3 font-semibold capitalize dark:text-slate-200">Payments</h5>
      <ul class="text-[0.94rem] leading-8 text-slate-600 dark:text-slate-400">
        <li>
          <a href="#" class="flex hover:text-blue-500"
            ><svg width="3" height="32" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> All Payments</a
          >
        </li>
        <li>
          <a href="#" class="flex hover:text-blue-500"
            ><svg width="3" height="32" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Cancelled</a
          >
        </li>
        <li>
          <a href="#" class="flex hover:text-blue-500"
            ><svg width="3" height="32" viewBox="0 -9 3 24" class="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Refunded</a
          >
        </li>
      </ul>
    </li>
  </ul>
</div>

`,
      title: "Basic",
    };
  },
};
</script>
