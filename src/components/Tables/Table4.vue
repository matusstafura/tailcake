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
      code: `
<div>
  <p class="text-lg font-bold dark:text-gray-300">Report</p>
  <p class="py-2 text-sm text-gray-500 dark:text-gray-300">Jan 1, 2022 - Jan 31, 2022</p>
  <table class="w-full text-left text-[0.95rem]">
    <thead class="text-sm text-gray-700 dark:text-gray-300">
      <tr class="border-b">
        <th class="py-4">Name</th>
        <th class="py-4 text-right">Quantity</th>
        <th class="py-4 text-right">Price</th>
        <th class="py-4 text-right">Sum Total</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-gray-500 border-b dark:text-gray-300">
        <td class="py-4 text-black dark:text-gray-300">James L. Coombs</td>
        <td class="py-4 font-light text-right text-gray-500 dark:text-gray-300">33</td>
        <td class="py-4 text-right">€33.44</td>
        <td class="py-4 text-right">€1,234.55</td>
      </tr>
      <tr class="text-gray-500 border-b dark:text-gray-300">
        <td class="py-4 text-black dark:text-gray-300">Peter Smith</td>
        <td class="py-4 font-light text-right text-gray-500 dark:text-gray-300">13</td>
        <td class="py-4 text-right">€12.23</td>
        <td class="py-4 text-right">€4,324.73</td>
      </tr>
      <tr class="text-gray-500 dark:text-gray-300">
        <td class="py-4 text-black"></td>
        <td class="py-4 font-light text-right text-gray-500 dark:text-gray-300"></td>
        <td class="py-4 text-right">Subtotal</td>
        <td class="py-4 text-right">€8,324.73</td>
      </tr>
      <tr class="text-gray-500 dark:text-gray-300">
        <td class="py-4 text-black"></td>
        <td class="py-4 font-light text-right text-gray-500 dark:text-gray-300"></td>
        <td class="py-4 text-right">Tax (20%)</td>
        <td class="py-4 text-right">€1,324.73</td>
      </tr>
      <tr class="font-bold text-gray-500 dark:text-gray-300">
        <td class="py-4 text-black"></td>
        <td class="py-4 font-light text-right text-gray-500 dark:text-gray-300"></td>
        <td class="py-4 text-right">Total</td>
        <td class="text-right py-k">€1,324.73</td>
      </tr>
    </tbody>
  </table>
</div>

      `,
      title: "Product Table",
    };
  },
};
</script>

<style scoped></style>
