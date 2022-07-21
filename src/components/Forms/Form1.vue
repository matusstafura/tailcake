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
<form>
  <div class="grid max-w-lg p-4 gap-y-4">
    <div>
      <label for="firstname" class="block mb-2 text-sm font-semibold dark:text-gray-100">First Name</label>
      <input type="text" placeholder="John" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div>
      <label for="firstname" class="block mb-2 text-sm font-semibold dark:text-gray-100">Surname</label>
      <input type="text" placeholder="Smith" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div>
      <label for="firstname" class="block mb-2 text-sm font-semibold dark:text-gray-100">Bio</label>
      <textarea type="text" rows="4" placeholder="About you" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300"></textarea>
    </div>

    <div>
      <button class="right-0 flex px-4 py-2 text-white bg-blue-600 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Save</button>
    </div>
  </div>
</form>

`,
      title: "Basic",
    };
  },
};
</script>

<style scoped></style>
