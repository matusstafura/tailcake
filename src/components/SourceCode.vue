<template>
  <button @click="toggleCodeMode" class="px-4">
    Show source Code {{ toggleCode }}
  </button>
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
