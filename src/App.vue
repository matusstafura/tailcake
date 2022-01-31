<template>
  <Navigation></Navigation>
  <div class="flex">
    <Sidebar></Sidebar>
    <div id="content" class="p-6">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Navigation,
    Sidebar,
  },
};
</script>

<style></style>
