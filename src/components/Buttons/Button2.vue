<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Commerce",
  data() {
    return {
      code: `
      <a href="#" class="px-6 py-2 mr-2 text-white bg-indigo-500 rounded-3xl hover:bg-black"> <span>Get in touch</span> <svg fill="#ffffff" class="inline w-3 ml-2 -mt-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg> </a>
      <a href="#" class="px-20 py-2 mr-2 text-white rounded-md bg-emerald-400 hover:bg-black"> <span>Subscribe</span> </a>
`,
      title: "Commerce",
    };
  },
};
</script>

<style scoped></style>
