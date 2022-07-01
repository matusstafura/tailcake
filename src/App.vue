<template>
  <div class="flex py-4">
    <Sidebar></Sidebar>
    <div id="content" class="w-full px-8 pl-64">
      <Menu></Menu>
      <router-view></router-view>
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
  data() {
    return {
      sidebar: true,
    };
  },
  methods: {
    toggleMenu() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>
