<template>
  <div>
    <Element :mode="mode" :code="code"></Element>
  </div>
</template>

<script>
import Element from "./Element.vue";
export default {
  name: "Button",
  props: ["mode"],
  data() {
    return {
      code: `<section>
<div class="container">
<div class="flex">

<div class="p-4">
<div class="w-96 bg-gray-100">
<div><img src="https://dummyimage.com/600x400/ccc/fff" alt="thumbnial" /></div>
<div class="p-8">
<div class="mb-2 uppercase text-gray-400 font-bold">Category</div>
<h2 class="mb-2 text-2xl">Title</h2>
<p class="text-gray-600 mb-4">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
<div class="flex"><a href="#" class="text-blue-600">Read more</a>
<div class="">Seen 12x</div>
<div>Comments: 5</div>
</div>
</div>
</div>
</div>

<div class="p-4">
<div class="w-96 bg-gray-100">
<div><img src="https://dummyimage.com/600x400/ccc/fff" alt="thumbnial" /></div>
<div class="p-8">
<div class="mb-2 uppercase text-gray-400 font-bold">Category</div>
<h2 class="mb-2 text-2xl">Title</h2>
<p class="text-gray-600 mb-4">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
<div class="flex"><a href="#" class="text-blue-600">Read more</a>
<div class="">Seen 12x</div>
<div>Comments: 5</div>
</div>
</div>
</div>
</div>

<div class="p-4">
<div class="w-96 bg-gray-100">
<div><img src="https://dummyimage.com/600x400/ccc/fff" alt="thumbnial" /></div>
<div class="p-8">
<div class="mb-2 uppercase text-gray-400 font-bold">Category</div>
<h2 class="mb-2 text-2xl">Title</h2>
<p class="text-gray-600 mb-4">Brownie soufflé jelly beans liquorice wafer shortbread cotton candy tart shortbread. Lemon drops pudding candy canes muffin powder. Sugar plum croissant powder ice cream dessert chupa chups.</p>
<div class="flex"><a href="#" class="text-blue-600">Read more</a>
<div class="">Seen 12x</div>
<div>Comments: 5</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>`,
    };
  },
  components: { Element },
};
</script>

<style scoped></style>
