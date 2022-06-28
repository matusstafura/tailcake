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

<div class="p-8 mx-auto border dark:bg-gray-500 max-w-7xl rounded-xl">
  <div class="flex items-center justify-between py-8 border-b">
    <div>
      <h3 class="pb-4 text-4xl font-extrabold dark:text-white">Just try it out! You’ll fall in love</h3>
      <p class="pb-4 text-xl font-light text-gray-500 dark:text-gray-200">Designed for modern companies looking to launch a simple, premium and modern website and apps.</p>
    </div>
    <div>
      <button class="px-6 py-3 text-white uppercase bg-indigo-500 rounded shadow-lg hover:bg-indigo-500 dark:bg-indigo-200 dark:text-indigo-500 dark:hover:bg-gray-400 dark:hover:text-gray-100">Start now</button>
    </div>
  </div>
  <div class="grid grid-cols-3 py-8 gap-x-8">
    <div>
      <div class="pb-3 font-semibold text-indigo-500 uppercase dark:text-indigo-200">Because we care</div>
      <div class="pb-3 text-3xl font-bold dark:text-white">Get early access</div>
      <p class="pb-3 text-lg text-gray-500 dark:text-gray-200">Geeks is currently invite only. Sign up to the waitlist to be the first to try out Geeks and stay in the loop.</p>
    </div>
    <div>
      <ul class="gap-y-3">
        <li class="flex items-center pb-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
      </ul>
    </div>
    <div>
      <ul class="gap-y-3">
        <li class="flex items-center pb-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 border-b fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
        <li class="flex items-center py-4 fill-green-500">
          <svg class="h-4 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
          <span class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur.</span>
        </li>
      </ul>
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
