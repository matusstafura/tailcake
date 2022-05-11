<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With border",
  data() {
    return {
      code: `<div class="justify-between w-full px-6 py-4 text-sm text-yellow-700 bg-yellow-100 border-l-8 border-yellow-500">

    <div class="mb-2 text-2xl">
        Prerequisites
    </div>

    <div class="flex justify-between w-full">
       <p>You will need an API key, and you will need to know the regions and names of your source and destination.</p>
    </div>

</div>`,
      title: "With border",
    };
  },
};
</script>

<style scoped></style>
