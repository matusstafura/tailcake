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
      code: `<article>
   <div class="w-full">
      <div class="mb-4 text-sm text-center text-gray-500">FREQUENTLY ASKED QUESTIONS</div>
      <h2 class="mb-4 text-2xl font-bold text-center">Everything you need to know before getting started</h2>
      <div class="grid grid-cols-2">
         <div class="p-8">
            <h4 class="mb-4 text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <p class="text-gray-500">Nullam sollicitudin ex at consectetur commodo. Pellentesque rhoncus tempus justo quis posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt lorem magna, nec cursus magna rutrum id. Ut vulputate lorem vitae egestas porta. Mauris vel erat et tortor fringilla auctor fermentum a ligula.</p>
         </div>
         <div class="p-8">
            <h4 class="mb-4 text-xl font-semibold">Nisl suscipit adipiscing bibendum est ultricies</h4>
            <p class="text-gray-500">Vestibulum tristique nibh eget leo pulvinar ultricies. Phasellus odio libero, finibus at malesuada eu, semper ut erat. Nullam sit amet purus ipsum. Sed sit amet orci et eros porta auctor. In hac habitasse platea dictumst. Donec dictum ex eu mollis tempor.</p>
         </div>
         <div class="p-8">
            <h4 class="mb-4 text-xl font-semibold">Eget duis at tellus at</h4>
            <p class="text-gray-500">Pellentesque pretium, sapien vel blandit rutrum, elit magna dignissim odio, vel pellentesque ipsum sapien ut magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sollicitudin aliquam commodo.</p>
         </div>
      </div>
      <p class="text-xl text-center">Have more questions? <a href="#" class="underline">Ask your question here</a></p>
   </div>
</article>`,
      title: "Minimal",
    };
  },
};
</script>

<style scoped></style>
