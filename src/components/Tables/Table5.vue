<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "General Table",
  data() {
    return {
      code: `
<table class="w-full text-sm text-left bg-white shadow">
  <thead class="text-gray-600 bg-gray-50 dark:bg-gray-600 dark:bg-gray-400 dark:text-gray-200">
    <tr class="text-left uppercase">
      <th class="p-4">Order</th>
      <th class="p-4">Invoice</th>
      <th class="p-4">Items</th>
      <th class="p-4">Customer</th>
      <th class="p-4">Status</th>
      <th class="p-4">Payment</th>
      <th class="p-4">Total</th>
      <th class="p-4">Action</th>
    </tr>
  </thead>

  <tbody class="dark:bg-gray-500 dark:text-gray-300">
    <tr class="border-b dark:border-gray-600">
      <td class="p-4">100010070</td>
      <td class="p-4">INV1991</td>
      <td class="p-4">Items</td>
      <td class="p-4">John Doe</td>
      <td class="p-4">pending</td>
      <td class="p-4">Stripe</td>
      <td class="p-4">123.99</td>
      <td class="p-4">
        <a href="#" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">view</a>
      </td>
    </tr>
  </tbody>

  <tbody class="bg-blue-100 dark:bg-gray-500 dark:text-gray-300">
    <tr class="border-b dark:border-gray-700">
      <td class="p-4">100010070</td>
      <td class="p-4">INV1991</td>
      <td class="p-4">Items</td>
      <td class="p-4">John Doe</td>
      <td class="p-4">pending</td>
      <td class="p-4">Stripe</td>
      <td class="p-4">1339.44</td>
      <td class="p-4">
        <a href="#" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">view</a>
      </td>
    </tr>
  </tbody>

  <tbody class="dark:bg-gray-500 dark:text-gray-300">
    <tr>
      <td class="p-4">100010070</td>
      <td class="p-4">INV1991</td>
      <td class="p-4">Items</td>
      <td class="p-4">John Doe</td>
      <td class="p-4">canceled</td>
      <td class="p-4">PayPal</td>
      <td class="p-4">23.11</td>
      <td class="p-4">
        <a href="#" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">view</a>
      </td>
    </tr>
  </tbody>
</table>

`,
      title: "General Table",
    };
  },
};
</script>
