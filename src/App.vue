<template>
  <div id="nav" class="bg-blue-100 p-4 flex justify-end">
    <SourceCode @sourceCode="show"></SourceCode>
    <!-- <button @click="toggleDarkMode" class="px-4"> -->
    <!-- Nightmode {{ toggleDark }} -->
    <!-- </button> -->
    <router-link to="/" class="px-4">Home</router-link>
    <router-link to="/about" class="px-4">About</router-link>
  </div>
  <div class="flex">
    <Sidebar></Sidebar>
    <div id="content" class="p-6 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style></style>
