<template>
  <div>
    <div v-for="component in components" :key="component">
      <component :is="component">{{ components }}</component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["mode"],
  data() {
    return {
      components: [],
    };
  },
  created() {
    return this.allComp();
  },
  methods: {
    allComp() {
      const req = require.context("./Blog", true, /\.(js|vue)$/i);
      req.keys().map((key) => {
        const name = key.match(/\w+/)[0];
        this.components.push(name);
      });
    },
  },
};
</script>
