<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Basic",
  data() {
    return {
      code: `
<ol class="grid grid-cols-1 pt-4 sm:grid-cols-2 lg:grid-cols-4">
  <li class="border-0 lg:border-t">
    <div class="items-center">
      <div class="bg-blue-200 rounded-full -mt-7 h-14 w-14">
        <div class="pt-3 text-2xl font-semibold text-center text-blue-500">1</div>
      </div>
    </div>
    <h2 class="py-3 text-xl font-semibold dark:text-gray-200">Concept</h2>
    <p class="pb-12 pr-10 text-gray-500 dark:text-gray-300">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.</p>
  </li>
  <li class="border-0 lg:border-t">
    <div class="items-center">
      <div class="bg-blue-200 rounded-full -mt-7 h-14 w-14">
        <div class="pt-3 text-2xl font-semibold text-center text-blue-500">2</div>
      </div>
    </div>
    <h2 class="py-3 text-xl font-semibold dark:text-gray-200">Plan</h2>
    <p class="pb-12 pr-10 text-gray-500 dark:text-gray-300">Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.</p>
  </li>
  <li class="border-0 lg:border-t">
    <div class="items-center">
      <div class="bg-blue-200 rounded-full -mt-7 h-14 w-14">
        <div class="pt-3 text-2xl font-semibold text-center text-blue-500">3</div>
      </div>
    </div>
    <h2 class="py-3 text-xl font-semibold dark:text-gray-200">Check</h2>
    <p class="pb-12 pr-10 text-gray-500 dark:text-gray-300">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.</p>
  </li>
  <li>
    <div class="items-center">
      <div class="bg-blue-200 rounded-full -mt-7 h-14 w-14">
        <div class="pt-3 text-2xl font-semibold text-center text-blue-500">4</div>
      </div>
    </div>
    <h2 class="py-3 text-xl font-semibold dark:text-gray-200">Commit</h2>
    <p class="pb-12 pr-10 text-gray-500 dark:text-gray-300">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.</p>
  </li>
</ol>

`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
