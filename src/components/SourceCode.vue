<template>
  <button @click="toggleCodeMode" class="px-4" v-if="!toggleCode">
    Show code
  </button>
  <button @click="toggleCodeMode" class="px-4" v-else>Show preview</button>
</template>

<script>
export default {
  emits: ["sourceCode"],
  data() {
    return {
      toggleCode: false,
    };
  },
  methods: {
    toggleCodeMode(event) {
      event = this.toggleCode = !this.toggleCode;
      this.$emit("sourceCode", event);
    },
  },
};
</script>
