<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "FAQ vertical",
  data() {
    return {
      code: `
<div class="mx-auto max-w-7xl">
  <div class="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 p-4 dark:text-gray-200">
    <div>
      <h3 class="pb-3 uppercase text-indigo-500 dark:text-indigo-200">FAQ</h3>
      <span class="text-xl font-semibold md:text-3xl">If you don't see an answer to your question, you can send us an email from our contact form.</span>
      <p class="py-4 text-gray-500 dark:text-gray-200">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</p>
      <button class="rounded bg-indigo-400 px-6 py-3 uppercase text-white shadow-lg hover:bg-indigo-500 dark:bg-indigo-200 dark:text-indigo-500 dark:hover:bg-gray-400 dark:hover:text-gray-100">Read more</button>
    </div>

    <div>
      <ul>
        <li class="mb-4 rounded-lg border py-6 px-8">
          <div class="flex justify-between">
            <div class="font-semibold text-indigo-500 dark:text-indigo-200">Can I cancel my subscription?</div>
            <button>
              <svg class="fill-indigo-500 dark:fill-indigo-200" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" /></svg>
            </button>
          </div>
          <p class="pt-3 text-gray-500 dark:text-gray-200">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </li>
        <li class="mb-4 rounded-lg border py-6 px-8">
          <div class="flex justify-between">
            <div class="font-semibold text-indigo-500 dark:text-indigo-200">Do you offer a free trial edit?</div>
            <button>
              <svg class="fill-indigo-500 dark:fill-indigo-200" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" /></svg>
            </button>
          </div>
        </li>
        <li class="mb-4 rounded-lg border py-6 px-8">
          <div class="flex justify-between">
            <div class="font-semibold text-indigo-500 dark:text-indigo-200">Do you offer a free trial edit?</div>
            <button>
              <svg class="fill-indigo-500 dark:fill-indigo-200" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" /></svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


`,
      title: "FAQ vertical",
    };
  },
};
</script>

<style scoped></style>
