<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Centered",
  data() {
    return {
      code: `
<div class="rounded-xl shadow-lg bg-slate-50 md:w-[24rem] w-96 text-center dark:bg-gray-300">
  <div class="px-10 py-8 leading-8">
    <div class="text-xl font-semibold text-slate-700">
      Notification
    </div>
    <div class="text-slate-600">You have an appoitment in an hour.</div>
  </div>
  <hr/>
  <div class="py-4 text-blue-400">
    <button type="submit" class="hover:font-bold">OK</button>
  </div>
</div>
`,
      title: "Centered",
    };
  },
};
</script>

<style scoped></style>
