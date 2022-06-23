<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With border",
  data() {
    return {
      code: `
<!-- Tables Border Colors -->
<table class="border border-indigo-400">
  <thead class="border border-indigo-400">
    <tr class="text-left divide-x divide-indigo-400 dark:text-gray-200">
      <th class="px-5 py-2">Id</th>
      <th class="px-5 py-2">Title</th>
      <th class="px-5 py-2">Status</th>
      <th class="px-5 py-2">Assignee</th>
      <th class="px-5 py-2">Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody class="divide-y divide-indigo-400">
    <tr class="divide-x divide-indigo-400 text-slate-500 dark:text-gray-200">
      <th class="px-5 py-2">1</th>
      <td class="px-5 py-2">Implement new UX</td>
      <td class="px-5 py-2"><span class="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200">Backlog</span></td>
      <td class="px-5 py-2">Lanora Sandoval</td>
      <td class="px-5 py-2">$4,521</td>
      <td class="px-5 py-2">
        <a href="#">
          <svg class="h-4 fill-slate-500 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
        </a>
      </td>
    </tr>
    <tr class="divide-x divide-indigo-400 text-slate-500 dark:text-gray-200">
      <th class="px-5 py-2">2</th>
      <td class="px-5 py-2">Design syntax</td>
      <td class="px-5 py-2"><span class="px-2 py-1 text-xs font-semibold text-orange-500 bg-orange-200">In Progress</span></td>
      <td class="px-5 py-2">Calvin Garrett</td>
      <td class="px-5 py-2">$7,546</td>
      <td class="px-5 py-2">
        <a href="#">
          <svg class="h-4 fill-slate-500 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
        </a>
      </td>
    </tr>
    <tr class="divide-x divide-indigo-400 text-slate-500 dark:text-gray-200">
      <th class="px-5 py-2">3</th>
      <td class="px-5 py-2">Configurable resources</td>
      <td class="px-5 py-2"><span class="px-2 py-1 text-xs font-semibold text-green-600 bg-green-300">Done</span></td>
      <td class="px-5 py-2">Florence Guzman</td>
      <td class="px-5 py-2">$1,350</td>
      <td class="px-5 py-2">
        <a href="#">
          <svg class="h-4 fill-slate-500 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
        </a>
      </td>
    </tr>
    <tr class="divide-x divide-indigo-400 text-slate-500 dark:text-gray-200">
      <th class="px-5 py-2">4</th>
      <td class="px-5 py-2">Implement extensions</td>
      <td class="px-5 py-2"><span class="px-2 py-1 text-xs font-semibold text-orange-500 bg-orange-200">In Progress</span></td>
      <td class="px-5 py-2">Maritza Blanda</td>
      <td class="px-5 py-2">$4,521</td>
      <td class="px-5 py-2">
        <a href="#">
          <svg class="h-4 fill-slate-500 dark:fill-gray-200" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
        </a>
      </td>
    </tr>
  </tbody>
</table>

      `,
      title: "With border",
    };
  },
};
</script>

<style scoped></style>
