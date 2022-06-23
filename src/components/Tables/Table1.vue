<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Trivial",
  data() {
    return {
      code: `
<table class="min-w-full text-sm">
  <thead class="text-black dark:bg-gray-600 dark:text-white">
    <tr class="border-b">
      <th class="px-4 py-3 text-left uppercase">id</th>
      <th class="px-4 py-3 text-left capitalize">name</th>
      <th class="px-4 py-3 text-left capitalize">status</th>
      <th class="px-4 py-3 text-left capitalize">invoice</th>
      <th class="px-4 py-3 text-left capitalize">date</th>
      <th class="px-4 py-3 text-left capitalize">action</th>
    </tr>
  </thead>

  <tbody class="text-left divide-y divide-gray-200 dark:bg-gray-500 dark:text-white">
    <tr>
      <td class="px-4 py-3">278805101</td>
      <td class="px-4 py-3">Christopher Neal</td>
      <td class="px-4 py-3">Subscribed</td>
      <td class="px-4 py-3">$35.00</td>
      <td class="px-4 py-3">October 15, 2022</td>
      <th class="px-4 py-3">
        <a href="#" class="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md hover:underline">Details</a>
      </th>
    </tr>
    <tr>
      <td class="px-4 py-3">354581101</td>
      <td class="px-4 py-3">Aaron James</td>
      <td class="px-4 py-3">Unsubscribed</td>
      <td class="px-4 py-3">$19.50</td>
      <td class="px-4 py-3">October 5, 2022</td>
      <th class="px-4 py-3">
        <a href="#" class="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md hover:underline">Details</a>
      </th>
    </tr>
  </tbody>
</table>

`,
      title: "Trivial",
    };
  },
};
</script>

<style scoped></style>
