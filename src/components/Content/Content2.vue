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
<div class="max-w-5xl mx-auto dark:text-gray-200">
  <h2 class="py-4 text-2xl font-bold">Faqs</h2>
  <ul>
    <li class="py-4">
      <div class="flex justify-between pb-4 border-b">
        <h3 class="text-lg font-semibold">Can I cancel or change my order?</h3>
        <button>
          <svg class="dark:fill-gray-200 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" /></svg>
        </button>
      </div>
      <p class="py-4 text-gray-500 dark:text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
    </li>

    <li class="py-4">
      <div class="flex justify-between pb-4 border-b">
        <h3 class="text-lg font-semibold">How can I return an item purchased online?</h3>
        <button>
          <svg class="dark:fill-gray-200 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
        </button>
      </div>
      <p class="hidden py-4 text-gray-500 dark:text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
    </li>

    <li class="py-4">
      <div class="flex justify-between pb-4 border-b">
        <h3 class="text-lg font-semibold">How can I pay for my purchases?</h3>
        <button>
          <svg class="dark:fill-gray-200 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
        </button>
      </div>
      <p class="hidden py-4 text-gray-500 dark:text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</p>
    </li>
  </ul>
</div>

`,
      title: "FAQ vertical",
    };
  },
};
</script>

<style scoped></style>
