<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Blogpost list",
  data() {
    return {
      code: `
<div class="grid grid-cols-1 bg-white dark:bg-gray-700 gap-x-8 gap-y-4 dark:text-white lg:grid-cols-2 xl:grid-cols-3">
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

  <article class="p-8">
    <div class="mb-4">
      <span class="px-3 py-1 text-sm text-blue-600 capitalize bg-blue-200 rounded-full">Sport</span>
    </div>
    <a href="#" class="hover:text-blue-500">
      <h1 class="pb-4 text-xl font-semibold tracking-wide dark:text-blue-400">10 Best Freelance Websites to Find Work in 2022</h1>
      <div class="pb-4 font-light text-gray-500 dark:text-gray-100">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</div>
      <div class="flex text-sm">
        <img src="https://tailcake.netlify.app/images/avatars/2.jpg" class="h-10 mr-4 rounded-full" />
        <div>
          <span class="flex font-semibold text-black dark:text-gray-100">Jane Smith</span>
          <span class="text-gray-400">June 22, 2022 - 1 min</span>
        </div>
      </div>
    </a>
  </article>

  <article class="p-8">
    <div class="mb-4">
      <span class="px-3 py-1 text-sm text-green-600 capitalize bg-green-200 rounded-full">Art</span>
    </div>
    <a href="#" class="hover:text-blue-500">
      <h1 class="pb-4 text-xl font-semibold tracking-wide dark:text-blue-400">What Is a WordPress Plugin: A Comprehensive Guide for Beginners</h1>
      <div class="pb-4 font-light text-gray-500 dark:text-gray-100">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum.</div>
      <div class="flex text-sm">
        <img src="https://tailcake.netlify.app/images/avatars/3.jpg" class="h-10 mr-4 rounded-full" />
        <div>
          <span class="flex font-semibold text-black dark:text-gray-100">Jane Smith</span>
          <span class="text-gray-400">June 22, 2022 - 1 min</span>
        </div>
      </div>
    </a>
  </article>
</div>


`,
      title: "Blogpost list",
    };
  },
};
</script>

<style scoped></style>
