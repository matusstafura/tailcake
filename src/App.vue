<template>
  <div class="bg-gradient-to-r from-blue-50 to-teal-50 via-gray-50">
    <div id="nav" class="flex justify-between p-4">
      <Menu></Menu>
    </div>
    <div class="flex">
      <Sidebar></Sidebar>
      <div id="content" class="w-full p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Menu from "./Menu.vue";

export default {
  components: {
    Sidebar,
    Menu,
  },
};
</script>

<style></style>
