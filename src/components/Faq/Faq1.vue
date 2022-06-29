<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "FAQ",
  data() {
    return {
      code: `

<div class="mx-auto max-w-7xl">
  <article>
    <div class="w-full py-4 dark:text-white">
      <div class="my-4 text-sm text-center text-gray-500 dark:text-white">FREQUENTLY ASKED QUESTIONS</div>
      <h2 class="text-2xl font-bold text-center text-blue-500 dark:text-blue-200">Everything you need to know before getting started</h2>
      <div class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        <div class="p-8">
          <h4 class="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <p class="text-gray-500 dark:text-gray-300">Nullam sollicitudin ex at consectetur commodo. Pellentesque rhoncus tempus justo quis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem magna, nec cursus magna rutrum id. Ut vulputate lorem vitae egestas porta. Mauris vel erat et tortor fringilla auctor fermentum a ligula.</p>
        </div>
        <div class="p-8">
          <h4 class="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">Nisl suscipit adipiscing bibendum est ultricies</h4>
          <p class="text-gray-500 dark:text-gray-300">Nullam sollicitudin ex at consectetur commodo. Pellentesque rhoncus tempus justo quis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem magna, nec cursus magna rutrum id. Ut vulputate lorem vitae egestas porta. Mauris vel erat et tortor fringilla auctor fermentum a ligula.</p>
        </div>
        <div class="p-8">
          <h4 class="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">Nisl suscipit adipiscing bibendum est ultricies</h4>
          <p class="text-gray-500 dark:text-gray-300">Vestibulum tristique nibh eget leo pulvinar ultricies. Phasellus odio libero, finibus at malesuada eu, semper ut erat. Nullam sit amet purus ipsum. Sed sit amet orci et eros porta auctor. In hac habitasse platea dictumst. Donec dictum ex eu mollis tempor.</p>
        </div>
        <div class="p-8">
          <h4 class="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-200">Eget duis at tellus at</h4>
          <p class="text-gray-500 dark:text-gray-300">Pellentesque pretium, sapien vel blandit rutrum, elit magna dignissim odio, vel pellentesque ipsum sapien ut magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sollicitudin aliquam commodo.</p>
        </div>
      </div>
      <p class="text-xl text-center">Have more questions? <a href="#" class="underline">Ask your question here</a></p>
    </div>
  </article>
</div>


`,
      title: "FAQ",
    };
  },
};
</script>

<style scoped></style>
