<template>
  <div id="nav" class="bg-blue-100 p-4 flex justify-end">
    <SourceCode @sourceCode="test"></SourceCode>
    <button @click="toggleDarkMode" class="px-4">
      Nightmode {{ toggleDark }}
    </button>
    <router-link to="/" class="px-4">Home</router-link>
    <router-link to="/about" class="px-4">About</router-link>
  </div>
  <div class="flex">
    <Sidebar></Sidebar>
    <div id="content" class="p-6 w-full">
      <router-view :mode="mode"></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import SourceCode from "./components/SourceCode.vue";

export default {
  data() {
    return {
      mode: false,
    };
  },
  components: {
    Sidebar,
    SourceCode,
  },
  methods: {
    test(event) {
      this.mode = event;
    },
  },
};
</script>

<style></style>
