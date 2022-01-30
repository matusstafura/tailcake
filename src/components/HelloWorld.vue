<template>
  <div>
    <h1>{{ component }}</h1>
    <div class="grid grid-cols-2 col-auto divide-x">
      <div>
        <p v-html="sourceCode"></p>
      </div>
      <div>
        <textarea
          rows="5"
          cols="40"
          v-model="sourceCode"
          class="border-black"
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
      component: "Component Button",
      sourceCode: '<h1 class="text-3xl">Title<h1>',
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
