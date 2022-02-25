<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Product Table",
  data() {
    return {
      code: `<div class="">
  <table class="border shadow min-w-full text-sm font-light">

  <thead class="bg-gray-50 text-black dark:text-white dark:bg-gray-600">
    <tr class="border-b-2">
      <th class="py-3 text-left px-4 uppercase">sku</th>
      <th class="py-3 text-left px-4 uppercase">name</th>
      <th class="py-3 text-left px-4 uppercase">categories</th>
      <th class="py-3 text-left px-4 uppercase">price</th>
      <th class="py-3 text-left px-4 uppercase">status</th>
      <th class="py-3 text-left px-4 uppercase">action</th>
    </tr>
  </thead>

  <tbody class="divide-y divide-gray-100 dark:text-white dark:bg-gray-500 text-left">
    <tr>
      <td class="px-4 py-3">278805101</td>
      <td class="px-4 py-3">Premier Cropped Skinny Jean</td>
      <td class="px-4 py-3">casual, sale</td>
      <td class="px-4 py-3">449:-</td>
      <td class="px-4 py-3">enabled</td>
      <th class="px-4 py-3">
        <a href="#" class="text-blue-400 font-light block hover:underline">edit</a>
      </th>
    </tr>
    <tr>
      <td class="px-4 py-3">354581101</td>
      <td class="px-4 py-3">CROSS SPORTSWEAR M Fnc Pant</td>
      <td class="px-4 py-3">popular, brand</td>
      <td class="px-4 py-3">194:-</td>
      <td class="px-4 py-3">disabled</td>
      <th class="px-4 py-3">
        <a href="#" class="text-blue-400 font-light block hover:underline">edit</a>
      </th>
    </tr>
  </tbody>

  </table>
</div>`,
      title: "Product Table",
    };
  },
};
</script>

<style scoped></style>
