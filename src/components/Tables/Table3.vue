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
  <p class="text-2xl font-bold dark:text-gray-300">Payments</p>
  <table class="w-full text-left">
    <thead class="text-sm text-gray-700 uppercase dark:text-gray-300">
      <tr class="border-b">
        <th class="py-2">All</th>
        <th class="py-2">Name</th>
        <th class="py-2">email</th>
        <th class="py-2">
          <div class="flex">
            <span>Total</span>
            <button type="submit">
              <svg class="h-5 fill-gray-400 hover:fill-slate-300" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z" fill-rule="nonzero" /></svg>
            </button>
            <button type="submit">
              <svg class="h-5 fill-gray-400 hover:fill-slate-300" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z" fill-rule="nonzero" /></svg>
            </button>
          </div>
        </th>
        <th class="py-2">
          <div class="flex">
            <span>Last Payment</span>
            <button type="submit">
              <svg class="h-5 fill-gray-400 hover:fill-slate-300" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z" fill-rule="nonzero" /></svg>
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="dark:text-gray-300">
      <tr class="text-gray-600 border-b dark:text-gray-300">
        <td>
          <div class="flex items-center">
            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            <label for="checkbox-table-1" class="sr-only">checkbox</label>
          </div>
        </td>
        <td class="py-2">James L. Coombs</td>
        <td class="py-2 font-light text-gray-500 dark:text-gray-300">jameslcoombs@example.com</td>
        <td class="py-2">€33.44</td>
        <td class="py-2">Jan 08, 2023</td>
      </tr>
      <tr class="text-gray-600 border-b dark:text-gray-300">
        <td>
          <div class="flex items-center">
            <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            <label for="checkbox-table-2" class="sr-only">checkbox</label>
          </div>
        </td>
        <td class="py-2">Peter Smith</td>
        <td class="py-2 font-light text-gray-500 dark:text-gray-300">psmith@example.com</td>
        <td class="py-2">€12.23</td>
        <td class="py-2">Jan 02, 2023</td>
      </tr>
    </tbody>
  </table>
  <div class="flex justify-between py-2 mt-4 text-sm text-gray-500 dark:text-gray-300">
    <span>123 results</span>
    <div>
      <a href="/previous" class="p-2 ml-2 border rounded shadow">Previous</a>
      <a href="/next" class="p-2 ml-2 text-gray-800 border rounded shadow dark:text-gray-100">Next</a>
    </div>
  </div>
</div>

      `,
      title: "Product Table",
    };
  },
};
</script>

<style scoped></style>
