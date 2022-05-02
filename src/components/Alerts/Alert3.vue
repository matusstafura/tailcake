<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Alert with link",
  data() {
    return {
      code: `<div class="flex justify-between w-full py-4 px-6 text-sm text-gray-700 bg-blue-200">

    <div class="m-auto">
        <svg class="mr-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
    </div>

    <div class="flex justify-between w-full">
       <p>An order has been successfully created.</p>
       <a href="#" class="font-bold hover:underline">View Order</a>
    </div>

</div>`,
      title: "Alert with link",
    };
  },
};
</script>

<style scoped></style>
