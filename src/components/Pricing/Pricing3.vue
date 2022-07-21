<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Pricing Block",
  data() {
    return {
      code: `
<div class="max-w-lg p-4 mx-auto md:max-w-4xl">
  <div class="grid grid-cols-1 bg-white border border-gray-100 shadow rounded-xl dark:bg-gray-200 md:grid-cols-3">
    <div class="col-span-2 p-8">
      <h3 class="pb-3 text-2xl font-semibold">Lifetime Membership</h3>
      <p class="text-gray-500">Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community.</p>
      <div class="relative py-4 text-gray-500 border-b dark:border-gray-300">
        <div class="absolute pr-4 mt-1 uppercase bg-white dark:bg-gray-200">Features</div>
      </div>

      <ul class="grid grid-cols-1 py-4 mt-4 text-gray-500 gap-y-4 md:grid-cols-2">
        <li class="flex">
          <svg class="p-1 mt-1 mr-2 bg-blue-500 rounded-xl fill-blue-100" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>
          <span>Private forum access</span>
        </li>
        <li class="flex">
          <svg class="p-1 mt-1 mr-2 bg-blue-500 rounded-xl fill-blue-100" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>
          <span>Private forum access</span>
        </li>
        <li class="flex">
          <svg class="p-1 mt-1 mr-2 bg-blue-500 rounded-xl fill-blue-100" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>
          <span>Private forum access</span>
        </li>
        <li class="flex">
          <svg class="p-1 mt-1 mr-2 bg-blue-500 rounded-xl fill-blue-100" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>
          <span>Private forum access</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col p-8 text-center rounded-r-lg bg-slate-50 dark:bg-slate-100">
      <div class="m-auto">
        <div class="mb-3 text-6xl font-extrabold">$599</div>
        <p class="flex-grow pb-2 text-sm text-gray-500">No monthly subscription, you only pay once.</p>
      </div>
      <div>
        <button type="submit" class="px-6 py-2 m-2 text-white bg-blue-500 rounded-3xl hover:bg-black">
          <span>Get in touch</span>
          <svg fill="#ffffff" class="inline w-3 ml-2 -mt-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
        </button>
      </div>
    </div>
  </div>
</div>

`,
      title: "Pricing Block",
    };
  },
};
</script>

<style scoped></style>
