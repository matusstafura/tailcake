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
<div class="container grid grid-cols-1 gap-8 mx-auto text-slate-700 dark:text-white lg:grid-cols-3 xl:max-w-screen-xl">
  <div class="p-12 rounded-lg shadow-md">
    <div class="mb-4 text-2xl">Basic Plan</div>
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

    <button class="px-6 py-3 mt-8 text-white uppercase bg-indigo-400 rounded shadow-lg hover:bg-indigo-500 dark:bg-white dark:text-black">Choose Plan</button>
  </div>
  <div class="p-12 rounded-lg shadow-md">
    <div class="mb-4 text-2xl">Basic Plan</div>
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

    <button class="px-6 py-3 mt-8 text-white uppercase bg-indigo-400 rounded shadow-lg hover:bg-indigo-500 dark:bg-white dark:text-black">Choose Plan</button>
  </div>
  <div class="p-12 rounded-lg shadow-md">
    <div class="mb-4 text-2xl">Basic Plan</div>
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

    <button class="px-6 py-3 mt-8 text-white uppercase bg-indigo-400 rounded shadow-lg hover:bg-indigo-500 dark:bg-white dark:text-black">Choose Plan</button>
  </div>
</div>

`,
      title: "Pricing Plan",
    };
  },
};
</script>

<style scoped></style>
