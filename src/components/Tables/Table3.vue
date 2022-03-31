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
      code: `<table class="shadow min-w-full text-sm font-light">

  <thead class="bg-gray-50 text-black dark:text-white dark:bg-gray-600 ">
    <tr class="uppercase text-left">
      <th class="p-4">Order</th>
      <th>Invoice</th>
      <th>Items</th>
      <th>Customer</th>
      <th>Status</th>
      <th>Payment</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody class="bg-white dark:text-white dark:bg-gray-500 text-left">
    <tr>
      <td class="p-4">100010070</td>
      <td>INV1991</td>
      <td>Items</td>
      <td>John Doe</td>
      <td>pending</td>
      <td>Stripe</td>
      <td>339.44</td>
      <td>view</td>
    </tr>
  </tbody>

  <tbody class="bg-green-100 dark:text-white dark:bg-gray-500 text-left">
    <tr>
      <td class="p-4">100010070</td>
      <td>INV1991</td>
      <td>Items</td>
      <td>John Doe</td>
      <td>pending</td>
      <td>Stripe</td>
      <td>339.44</td>
      <td>view</td>
    </tr>
  </tbody>

  <tbody class="bg-pink-50 dark:text-white dark:bg-gray-500 text-left">
    <tr>
      <td class="p-4">100010070</td>
      <td>INV1991</td>
      <td>Items</td>
      <td>John Doe</td>
      <td>canceled</td>
      <td>PayPal</td>
      <td>339.44</td>
      <td>view</td>
    </tr>
  </tbody>

  </table>`,
      title: "General Table",
    };
  },
};
</script>
