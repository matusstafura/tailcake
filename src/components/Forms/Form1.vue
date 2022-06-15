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
  <div class="grid max-w-lg gap-y-4 p-4">
    <div>
      <label for="firstname" class="mb-2 block text-sm font-semibold">First Name</label>
      <input type="text" placeholder="John" class="w-full rounded-lg border border-gray-200 bg-slate-50 p-2" />
    </div>
    <div>
      <label for="firstname" class="mb-2 block text-sm font-semibold">Surname</label>
      <input type="text" placeholder="Smith" class="w-full rounded-lg border border-gray-200 bg-slate-50 p-2" />
    </div>
    <div>
      <label for="firstname" class="mb-2 block text-sm font-semibold">Bio</label>
      <textarea type="text" rows="4" placeholder="About you" class="w-full rounded-lg border border-gray-200 bg-slate-50 p-2"></textarea>
    </div>

    <div>
      <button class="right-0 flex rounded bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Save</button>
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
