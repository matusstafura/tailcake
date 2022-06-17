<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Sign up",
  data() {
    return {
      code: `
<form>
  <div class="grid max-w-md p-4 gap-y-4">
    <p class="text-xl font-semibold dark:text-gray-100">Sign in to your account</p>
    <div>
      <label for="email" class="block mb-2 text-sm font-semibold dark:text-gray-100">Email</label>
      <input type="text" placeholder="my@email.com" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div>
      <div class="flex justify-between">
        <label for="password" class="mb-2 text-sm font-semibold dark:text-gray-100">Password</label>
        <a href="/forgot-password" class="text-sm text-blue-500">Forgot your password?</a>
      </div>
      <input type="password" placeholder="password" class="w-full p-2 border border-gray-200 rounded-lg bg-slate-50 dark:bg-gray-300" />
    </div>
    <div class="flex items-center py-3">
      <input checked id="remember-me" type="checkbox" value="" class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded" />
      <label for="remember-me" class="ml-2 text-sm dark:text-gray-100">Stay signed for a week</label>
    </div>
    <button class="px-4 py-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Sign up</button>
  </div>
</form>

`,
      title: "Sign up",
    };
  },
};
</script>

<style scoped></style>
