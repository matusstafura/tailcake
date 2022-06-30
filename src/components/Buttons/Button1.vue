<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Primary Button",
  data() {
    return {
      code: `
<button class="px-6 py-3 m-2 text-white uppercase bg-indigo-400 rounded shadow-lg hover:bg-indigo-500 dark:bg-gray-500 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-100">Start now</button>
<button class="px-6 py-3 m-2 text-indigo-500 uppercase border rounded shadow-lg bg-white-400 border-gray-50 hover:text-indigo-400 dark:text-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-100">Contact us</button>
<button class="px-4 py-3 m-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Read more</button>

<button class="px-6 py-2 m-2 text-white bg-indigo-500 rounded-3xl hover:bg-black">
  <span>Get in touch</span> <svg fill="#ffffff" class="inline w-3 ml-2 -mt-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
</button>

<button class="px-20 py-2 m-2 text-white rounded-md bg-emerald-400 hover:bg-black"><span>Subscribe</span></button>
      `,
      title: "Primary Button",
    };
  },
};
</script>

<style scoped></style>
