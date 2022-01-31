<template>
  <div id="nav" class="bg-blue-100 p-4 flex justify-end">
    <button @click="toggleDarkMode">Nightmode {{ toggleDark }}</button>
    <router-link to="/" class="px-4">Home</router-link>
    <router-link to="/about" class="px-4">About</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDark: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.toggleDark = !this.toggleDark;
    },
  },
};
</script>

<style></style>
