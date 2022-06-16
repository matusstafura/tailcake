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
  <div class="grid max-w-md gap-y-4 p-4">
    <p class="text-xl font-semibold">Sign in to your account</p>
    <div>
      <label for="email" class="mb-2 block text-sm font-semibold">Email</label>
      <input type="text" placeholder="my@email.com" class="w-full rounded-lg border border-gray-200 bg-slate-50 p-2" />
    </div>
    <div>
      <div class="flex justify-between">
        <label for="password" class="mb-2 text-sm font-semibold">Password</label>
        <a href="/forgot-password" class="text-sm text-blue-500">Forgot your password?</a>
      </div>
      <input type="password" placeholder="password" class="w-full rounded-lg border border-gray-200 bg-slate-50 p-2" />
    </div>
    <div class="flex items-center py-3">
      <input checked id="remember-me" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-500" />
      <label for="remember-me" class="ml-2 text-sm">Stay signed for a week</label>
    </div>
    <button class="rounded bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500 dark:hover:bg-blue-500 dark:hover:text-gray-100">Sign up</button>
  </div>
</form>

`,
      title: "Sign up",
    };
  },
};
</script>

<style scoped></style>
