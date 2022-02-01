<template>
  <div>
    <h1 class="text-3xl py-4">{{ component }}</h1>

    <div class="grid grid-cols-2 col-auto divide-x">
      <div>
        <p v-html="sourceCode"></p>
      </div>
      <div>
        <textarea
          rows="5"
          cols="40"
          v-model="sourceCode"
          class="border border-gray-300 w-128 p-4 rounded h-full text-xl"
        />
      </div>
    </div>
    <div>
      <!-- <p>{{ sourceCode }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      component: "Creator",
      sourceCode: `<section>
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
</section>`,
    };
  },
  methods: {
    someText() {
      this.sourceCode;
    },
  },
};
</script>

<style scoped></style>
