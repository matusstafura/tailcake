<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Answer yes/no",
  data() {
    return {
      code: `
<div class="items-center lg:flex">
  <span class="mr-4 text-xl font-semibold text-gray-700 dark:text-gray-100">Was this page helpful?</span>

  <div class="flex flex-wrap">
    <button class="mr-2 flex rounded bg-blue-600 px-4 py-1 text-[0.95rem] text-white shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">
      <svg fill="#ffffff" class="h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z" /></svg>
      Yes
    </button>

    <button class="flex rounded bg-blue-600 px-4 py-1 text-[0.95rem] text-white shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">
      <svg fill="#ffffff" class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M24 11.936c0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.05.883-3.791 1.519-6.169 1.746v-.904h-6v12h6v-.73c2.454.585 4.852 2.066 6.4 7.402.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.106-.466 2.767-.692 3.977-.744 1.426-.06 2.594-.858 2.594-2.506zm-20 .064h-2v-8h2v8zm15.755-1.302l1.394.167c1.075.129 1.105 1.525.051 1.584-2.749.154-5.06 1.013-6.12 1.556.43 1.748.92 3.463.92 5.534 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.875 1.028-.141 1.115z" /></svg>
      No
    </button>
  </div>
</div>

`,
      title: "Answer yes/no",
    };
  },
};
</script>

<style scoped></style>
