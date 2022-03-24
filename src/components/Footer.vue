<template>
  <div>
    <div v-for="component in components" :key="component">
      <component :is="component">{{ components }}</component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footers",
  props: ["mode"],
  data() {
    return {
      components: [],
    };
  },
  mounted() {
    return this.allComp();
  },
  methods: {
    allComp() {
      const req = require.context("./Footers", true, /\.(js|vue)$/i);
      req.keys().map((key) => {
        const name = key.match(/\w+/)[0];
        this.components.push(name);
      });
    },
  },
};
</script>
