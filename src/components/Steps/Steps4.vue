<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Vertical",
  data() {
    return {
      code: `

<div class="max-w-md">
  <ol>
    <li class="flex pb-5 border-l-2 border-gray-200">
      <div class="w-10 h-10 -ml-5 bg-blue-200 rounded-full">
        <div class="mt-2 text-center text-blue-600">1</div>
      </div>
      <div class="w-full pl-4">
        <h2 class="mt-2 font-semibold text-blue-600">PREPARE</h2>
        <div class="py-4 text-gray-500">Bacon ipsum dolor amet filet mignon jowl sirloin alcatra short loin, drumstick boudin meatloaf rump.</div>
      </div>
    </li>
    <li class="flex pb-5 border-l-2 border-gray-200">
      <div class="w-10 h-10 -ml-5 bg-blue-200 rounded-full">
        <div class="mt-2 text-center text-blue-600">2</div>
      </div>
      <div class="w-full pl-4">
        <h2 class="mt-2 font-semibold text-blue-600">CHECK</h2>
        <div class="py-4 text-gray-500">Cow prosciutto tri-tip, pork chop shoulder pastrami flank.</div>
      </div>
    </li>
    <li class="flex pb-5">
      <div class="w-10 h-10 -ml-5 bg-blue-200 rounded-full">
        <div class="mt-2 text-center text-blue-600">3</div>
      </div>
      <div class="w-full pl-4">
        <h2 class="mt-2 font-semibold text-blue-600">COMMIT</h2>
        <div class="py-4 text-gray-500">Bacon ipsum dolor amet filet mignon jowl sirloin alcatra short loin, drumstick boudin meatloaf rump.</div>
      </div>
    </li>
  </ol>
</div>




`,
      title: "Vertical",
    };
  },
};
</script>

<style scoped></style>
