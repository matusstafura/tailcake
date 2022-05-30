<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With image",
  data() {
    return {
      code: `
<div class="flex justify-between rounded-lg shadow-lg bg-slate-50 md:w-[32rem] w-96">
  <div class="py-3 pl-4 m-auto">
      <img src="data:image/png;base64,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"/>
  </div>
  <div class="px-4 py-3">
    <div class="flex justify-between">
      <span class="font-bold text-gray-700">Daily Goal Achieved</span>
      <span class="text-sm text-gray-600">2 days ago</span>
    </div>
    <div class="text-gray-700">Congratulations, you've reached your daily workout goal.</div>
  </div>
  <div class="-mt-2 -mr-2">
    <button type="submit">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABdklEQVRIie3WsU4bQRDG8R/wDBQhBpGOAircAVUqBAGeAwV4FrpEIApKOqJEvAT00KBIICHcAU2kYEzhO3Gxbtd7ZwtS8ElT3O7O/Wd29+aGd72SRiqsncI6VjCNRjZ+jd/4iWNcDSu4j/iOR3T6WBtHWWADaQMPCcBeu8daXeiObgZVocXst6tCNwaEFuHJmTfU297Ytk+kgA+GCM1trx90Svj2LqCJ25K5W8xjMeD76OXzA6M94HWMBYL6g1N8Rqsw3srGzrI1ZRrL3h3USSDiPKvZbN1s9lw2FvL/FQNfRBzL4KnQDs5j4JTb3MJcwWcGNwl+D0VQ7xnXVSdhzVNs8s22+s0u19eI43wAUIQ3I/6bMfCkcAFZFC8gTSwFfP/qKSBl2o9EXde+9YPS/fHfDxF6hw8pYFiW1nH0sza+pEJzbRu8EdiqCs21pt6232G1LjTXOHZ1b2ZKlocSzrRKe9vw0t5+8m97e6lbIH5kz+/6f/QMBOVx3PhcYD8AAAAASUVORK5CYII="/>
    </button>
  </div>
</div>
`,
      title: "With image",
    };
  },
};
</script>

<style scoped></style>
