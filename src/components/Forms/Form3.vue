<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Contact Us",
  data() {
    return {
      code: `
<form action="#" method="POST">
  <div class="grid max-w-lg p-4 gap-y-4 dark:bg-gray-700">
    <h2 class="text-xl font-semibold dark:text-gray-100">Contact Us</h2>
    <div>
      <label for="name" class="block mb-2 text-sm font-semibold dark:text-gray-100">Name</label>
      <input type="text" name="name" placeholder="your name" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div>
      <label for="email" class="block mb-2 text-sm font-semibold dark:text-gray-100">Email</label>
      <input type="text" name="email" placeholder="my@email.com" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div>
      <label for="message" class="block mb-2 text-sm font-semibold dark:text-gray-100">Message</label>
      <textarea name="message" placeholder="Your message ..." rows="10" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" ></textarea>
    </div>
    <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded shadow-md right hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Send message</button>
  </div>
</form>
`,
      title: "Contact Us",
    };
  },
};
</script>

<style scoped></style>
