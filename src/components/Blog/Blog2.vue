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
      code: `<div class="grid grid-cols-1 m-4 gap-x-8 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 dark:text-white">
  <article class="flex flex-col justify-between flex-1 p-8 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-500">
    <a href="#" class="mb-4 text-xl font-semibold tracking-wide dark:text-blue-400">Start your online business</a>
    <div class="font-light text-gray-500 dark:text-gray-100">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </div>
    <div class="flex mt-16 text-sm">
        <img src="/images/avatars/1.jpg" class="h-12 mr-4 rounded-full" />
        <div>
          <span class="flex mb-2 font-bold text-gray-500 dark:text-gray-100">Jane Smith</span>
          <span>June 22, 2022 - 1 min</span>
        </div>
    </div>
  </article>
  <article class="flex flex-col justify-between flex-1 p-8 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-500">
    <a href="#" class="mb-4 text-xl font-semibold tracking-wide dark:text-blue-400">Start your online business</a>
    <div class="font-light text-gray-500 dark:text-gray-100">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </div>
    <div class="flex mt-16 text-sm">
        <img src="/images/avatars/2.jpg" class="h-12 mr-4 rounded-full" />
        <div>
          <span class="flex mb-2 font-bold text-gray-500 dark:text-gray-100">Jane Smith</span>
          <span>June 22, 2022 - 1 min</span>
        </div>
    </div>
  </article>
  <article class="flex flex-col justify-between flex-1 p-8 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-500">
    <a href="#" class="mb-4 text-xl font-semibold tracking-wide dark:text-blue-400">Start your online business</a>
    <div class="font-light text-gray-500 dark:text-gray-100">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </div>
    <div class="flex mt-16 text-sm">
        <img src="/images/avatars/3.jpg" class="h-12 mr-4 rounded-full" />
        <div>
          <span class="flex mb-2 font-bold text-gray-500 dark:text-gray-100">Jane Smith</span>
          <span>June 22, 2022 - 1 min</span>
        </div>
    </div>
  </article>
</div>`,
      title: "Blogpost list",
    };
  },
};
</script>

<style scoped></style>
