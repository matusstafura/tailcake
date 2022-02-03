<template>
  <div v-html="component" v-show="!mode"></div>
  <div v-show="mode">
    <pre
      style="
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: rgb(0, 0, 0);
        background: rgb(248, 248, 255);
      "
    >
      <code style="float: left; padding-right: 10px;">
      {{ component }}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["mode"],
  data() {
    return {
      component: `
  <button class="bg-blue-400 dark:bg-white px-6 py-3 text-white font-bold uppercase rounded shadow-lg hover:bg-blue-500 focus:bg-blue-700" > 
      Button
  </button>`,
    };
  },
};
</script>

<style scoped>
code {
  font-family: "Space Mono", monospace;
}
</style>
