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
          class="border border-gray-300 w-128 p-4 rounded h-auto"
        />
      </div>
    </div>
    <div>
      <!-- <p>{{ sourceCode }}</p> -->
    </div>
    <Button></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      component: "Component Button",
      sourceCode:
        '<button class="bg-blue-400 dark:bg-white px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700">Button</button>',
    };
  },
  methods: {
    someText() {
      this.sourceCode;
    },
  },
  components: { Button },
};
</script>

<style scoped></style>
