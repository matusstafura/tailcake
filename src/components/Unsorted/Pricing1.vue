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
      code: `<section>
  <div class="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 xl:max-w-screen-xl">
    <div class="flex flex-col justify-between border border-gray-200 rounded-md shadow-lg bg-gray-50">
      <div class="p-8">
        <h5 class="mb-4 text-xl font-semibold">Easy</h5>
        <div class="text-sm text-gray-500">description</div>
        <div class="text-3xl">SEK 70:-</div>
        <hr class="my-5" />
        <div class="mb-4">
          <div>25 Projects</div>
          <div>10 mySQL Database</div>
          <div>25 GB of Storage</div>
          <div>Premium Support</div>
        </div>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500">Select plan</button>
      </div>
    </div>
    <div class="flex flex-col justify-between border border-gray-200 rounded-md shadow-lg bg-gray-50">
      <div class="p-8">
        <h5 class="mb-4 text-xl font-semibold">Easy</h5>
        <div class="text-sm text-gray-500">description</div>
        <div class="text-3xl">SEK 70:-</div>
        <hr class="my-5" />
        <div class="mb-4">
          <div>25 Projects</div>
          <div>10 mySQL Database</div>
          <div>25 GB of Storage</div>
          <div>Premium Support</div>
        </div>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500">Select plan</button>
      </div>
    </div>
    <div class="flex flex-col justify-between border border-gray-200 rounded-md shadow-lg bg-gray-50">
      <div class="p-8">
        <h5 class="mb-4 text-xl font-semibold">Easy</h5>
        <div class="text-sm text-gray-500">description</div>
        <div class="text-3xl">SEK 70:-</div>
        <hr class="my-5" />
        <div class="mb-4">
          <div>25 Projects</div>
          <div>10 mySQL Database</div>
          <div>25 GB of Storage</div>
          <div>Premium Support</div>
        </div>
      </div>
      <div class="p-8 text-center">
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500">Select plan</button>
      </div>
    </div>
  </div>
</section>`,
      title: "Minimal",
    };
  },
};
</script>

<style scoped></style>
