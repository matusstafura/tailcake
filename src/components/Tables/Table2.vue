<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Pricing Plan",
  data() {
    return {
      code: `<section>
  <div class="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 xl:max-w-screen-xl dark:text-white">
    <div class="flex flex-col justify-between bg-white border rounded-md shadow-lg bg-gray-50 dark:bg-gray-500">
      <div class="p-8">
        <h5 class="mb-4 text-xl font-semibold">Easy</h5>
        <div class="text-sm text-gray-500 dark:text-gray-100">bronze</div>
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
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500 dark:bg-blue-300 dark:text-white">Select plan</button>
      </div>
    </div>
    <div class="flex flex-col justify-between bg-white border rounded-md shadow-lg bg-gray-50 dark:bg-gray-500">
      <div class="p-8">
        <h5 class="mb-4 text-xl font-semibold">Easy</h5>
        <div class="text-sm text-gray-500 dark:text-gray-100">silver</div>
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
        <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500 dark:bg-blue-300 dark:text-white"">Select plan</button>
			</div>
		</div>
		<div class="flex flex-col justify-between bg-white border rounded-md shadow-lg  bg-gray-50 dark:bg-gray-500">
          <div class="p-8">
            <h5 class="mb-4 text-xl font-semibold">Easy</h5>
            <div class="text-sm text-gray-500 dark:text-gray-100">gold</div>
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
            <button class="px-6 py-3 font-semibold text-white bg-blue-400 rounded shadow-lg dark:bg-white dark:text-black hover:bg-blue-500 dark:bg-blue-300 dark:text-white"">Select plan</button>
			</div>
		</div>
	</div>
</section>`,
      title: "Pricing Plan",
    };
  },
};
</script>

<style scoped></style>
