<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Minimal",
  data() {
    return {
      code: `<div class="grid grid-cols-1 m-4 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
   <article class="p-8 rounded-lg shadow">
      <div>
         <div class="mb-4"><a href="#" class="text-xl font-semibold tracking-wide">This US States Test Doesn't End Until</a></div>
         <p class="font-light text-gray-500">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </p>
         <div>
            <div class="mt-4 text-sm">
               <span class="flex mb-2 font-bold text-gray-500">Jane Smith</span>
               <span>June 22, 2022 - 1 min</span>
            </div>
         </div>
      </div>
   </article>
   <article class="p-8 rounded-lg shadow">
      <div>
         <div class="mb-4"><a href="#" class="text-xl font-bold">This US States Test Doesn't End Until</a></div>
         <p class="font-light text-gray-500">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </p>
         <div>
            <div class="mt-4 text-sm">
               <span class="flex mb-2 font-bold text-gray-500">Jane Smith</span>
               <span>June 22, 2022 - 1 min</span>
            </div>
         </div>
      </div>
   </article>
   <article class="p-8 rounded-lg shadow">
      <div>
         <div class="mb-4"><a href="#" class="text-xl font-bold">This US States Test Doesn't End Until</a></div>
         <p class="font-light text-gray-500">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </p>
         <div>
            <div class="mt-4 text-sm">
               <span class="flex mb-2 font-bold text-gray-500">Jane Smith</span>
               <span>June 22, 2022 - 1 min</span>
            </div>
         </div>
      </div>
   </article>
   <article class="p-8 rounded-lg shadow">
      <div>
         <div class="mb-4"><a href="#" class="text-xl font-bold">This US States Test Doesn't End Until</a></div>
         <p class="font-light text-gray-500">Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva... </p>
         <div>
            <div class="mt-4 text-sm">
               <span class="flex mb-2 font-bold text-gray-500">Jane Smith</span>
               <span>June 22, 2022 - 1 min</span>
            </div>
         </div>
      </div>
   </article>
</div>`,
      title: "Minimal",
    };
  },
};
</script>

<style scoped></style>
