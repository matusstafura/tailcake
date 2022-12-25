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
<div class="container grid grid-cols-1 py-4 mx-auto gap-x-4 gap-y-12 text-slate-700 dark:text-white md:grid-cols-2 lg:grid-cols-3 xl:max-w-screen-lg">
  <div class="p-12 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-500">
    <div class="mb-4 text-2xl font-light"><span class="text-6xl font-bold">$9</span>/mo</div>
    <div class="mb-4 text-2xl font-semibold">Bronze Plan</div>
    <ul>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>1 Project</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>100K API Access</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>100MB Storage</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>7/24 Support</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>Weekly Reports</span>
      </li>
    </ul>
    <button class="w-full px-6 py-3 mt-8 text-white uppercase bg-blue-600 rounded shadow-md shadow-lg hover:bg-blue-500 dark:hover:bg-blue-400 text-blue-50 dark:bg-blue-500 dark:text-white">Choose Plan</button>
  </div>
  <div class="relative p-12 -my-4 bg-white border border-blue-400 rounded-lg shadow-md dark:bg-gray-500">
    <span class="absolute left-0 right-0 w-1/2 px-4 py-1 mx-auto text-sm text-center text-white bg-blue-600 -top-4 rounded-xl">MOST POPULAR</span>
    <div class="mb-4 text-2xl font-light"><span class="text-6xl font-bold">$19</span>/mo</div>
    <div class="mb-4 text-2xl font-semibold">Silver Plan</div>
    <ul>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>10 Projects</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>1M API Access</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>1GB Storage</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>7/24 Support</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>Weekly Reports</span>
      </li>
    </ul>
    <button class="w-full px-6 py-3 mt-8 text-white uppercase bg-blue-600 rounded shadow-md shadow-lg hover:bg-blue-500 dark:hover:bg-blue-400 text-blue-50 dark:bg-blue-500 dark:text-white">Choose Plan</button>
  </div>
  <div class="p-12 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-500">
    <div class="mb-4 text-2xl font-light"><span class="text-6xl font-bold">$49</span>/mo</div>
    <div class="mb-4 text-2xl font-semibold">Diamond Plan</div>
    <ul>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>Unlimited Projects</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>10M API Access</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>10GB Storage</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>7/24 Support</span>
      </li>
      <li class="flex py-2">
        <svg class="p-1 mt-1 mr-2 bg-blue-100 rounded-xl" style="fill:#747ed1;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
        <span>Daily Reports</span>
      </li>
    </ul>
    <button class="w-full px-6 py-3 mt-8 text-white uppercase bg-blue-600 rounded shadow-md shadow-lg hover:bg-blue-500 dark:hover:bg-blue-400 text-blue-50 dark:bg-blue-500 dark:text-white">Choose Plan</button>
  </div>
</div>

`,
      title: "Pricing Plan",
    };
  },
};
</script>

<style scoped></style>
