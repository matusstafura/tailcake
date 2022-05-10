<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Additional",
  data() {
    return {
      code: `<div class="px-6 py-5 mb-4 text-base text-green-700 bg-green-100 rounded-lg" role="alert">
  <h4 class="mb-2 text-2xl font-medium leading-tight">Thank you!</h4>
  <p>
    Your message has been successfully sent. We will contact you very soon!
  </p>
</div>`,
      title: "Additional",
    };
  },
};
</script>

<style scoped></style>
