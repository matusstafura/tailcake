<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Pricing Plan",
  data() {
    return {
      code: `
<section>
  <div class="container grid grid-cols-1 gap-8 mx-auto dark:text-white md:grid-cols-2 lg:grid-cols-3 xl:max-w-screen-xl">
    <div class="flex flex-col justify-between bg-white border rounded-md shadow-lg dark:bg-gray-500">
      <div class="p-8">
        <div class="flex items-center justify-between pb-8 mb-4 border-b">
          <div><h5 class="text-2xl font-semibold">Bronze</h5></div>
          <div class="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-2xl">save 30%</div>
        </div>
        <div class="text-5xl font-bold"><span class="text-4xl font-medium">$</span>6.99<sub class="bottom-[0.1rem] text-xl font-medium text-gray-500 dark:text-gray-200"> / month</sub></div>
        <hr class="my-5" />

        <ul class="mb-4 text-lg leading-10 text-gray-500 dark:text-gray-200">
          <li><span class="font-bold">25</span> Projects</li>
          <li><span class="font-bold">10</span> mySQL Database</li>
          <li><span class="font-bold">25 GB</span> of Storage</li>
          <li><span class="font-bold">Premium</span> Support</li>
        </ul>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-blue-300 dark:text-white">Select plan</button>
      </div>
    </div>

    <div class="flex flex-col justify-between bg-white border rounded-md shadow-lg dark:bg-gray-500">
      <div class="p-8">
        <div class="flex items-center justify-between pb-8 mb-4 border-b">
          <div><h5 class="text-2xl font-semibold">Silver</h5></div>
          <div class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-2xl">popular</div>
        </div>
        <div class="text-5xl font-bold"><span class="text-4xl font-medium">$</span>8.99<sub class="bottom-[0.1rem] text-xl font-medium text-gray-500 dark:text-gray-200"> / month</sub></div>
        <hr class="my-5" />
        <ul class="mb-4 text-lg leading-10 text-gray-500 dark:text-gray-200">
          <li><span class="font-bold">50</span> Projects</li>
          <li><span class="font-bold">20</span> mySQL Database</li>
          <li><span class="font-bold">50 GB</span> of Storage</li>
          <li><span class="font-bold">Premium</span> Support</li>
        </ul>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-blue-300 dark:text-white">Select plan</button>
      </div>
    </div>

    <div class="flex flex-col justify-between bg-white border rounded-md shadow-lg dark:bg-gray-500">
      <div class="p-8">
        <div class="flex items-center justify-between pb-8 mb-4 border-b">
          <div><h5 class="text-2xl font-semibold">Diamond</h5></div>
          <div class="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-2xl">save 50%</div>
        </div>
        <div class="text-5xl font-bold"><span class="text-4xl font-medium">$</span>19.99<sub class="bottom-[0.1rem] text-xl font-medium text-gray-500 dark:text-gray-200"> / month</sub></div>
        <hr class="my-5" />
        <ul class="mb-4 text-lg leading-10 text-gray-500 dark:text-gray-200">
          <li><span class="font-bold">Unlimited</span> Projects</li>
          <li><span class="font-bold">Unlimited</span> mySQL Database</li>
          <li><span class="font-bold">Unlimited </span> Storage</li>
          <li><span class="font-bold">Premium</span> Support</li>
        </ul>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg hover:bg-blue-500 dark:bg-blue-300 dark:text-white">Select plan</button>
      </div>
    </div>
  </div>
</section>

`,
      title: "Pricing Plan",
    };
  },
};
</script>

<style scoped></style>
