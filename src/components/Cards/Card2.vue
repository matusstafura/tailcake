<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Blog card",
  data() {
    return {
      code: `

<div class="max-w-md bg-white shadow dark:bg-gray-700 dark:text-white">
  <article class="p-8">
    <div class="mb-4">
      <span class="px-3 py-1 text-sm text-orange-600 capitalize bg-orange-200 rounded-full">Business</span>
    </div>
    <a href="#" class="hover:text-blue-500">
      <h1 class="pb-4 text-xl font-semibold tracking-wide dark:text-blue-400">How to Make a Website From Scratch: A Beginner’s Guide</h1>
      <div class="pb-4 font-light text-gray-500 dark:text-gray-100">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.</div>
      <div class="flex text-sm">
        <img src="https://tailcake.netlify.app/images/avatars/1.jpg" class="h-10 mr-4 rounded-full" />
        <div>
          <span class="flex font-semibold text-black dark:text-gray-100">Jane Smith</span>
          <span class="text-gray-400">June 22, 2022 - 1 min</span>
        </div>
      </div>
    </a>
  </article>
</div>


`,
      title: "Blog card",
    };
  },
};
</script>

<style scoped></style>
