<template>
  <div class="bg-gradient-to-r from-blue-50 to-teal-50 via-gray-50">
    <div id="nav" class="flex justify-between px-8 py-8">
      <a href="#" class="flex text-gray-400" @click="toggleMenu">
        <svg
          class="lg:hidden"
          fill="hsl(224, 7.2%, 40%)"
          viewBox="0 0 100 80"
          width="32"
          height="32"
        >
          <rect width="80" height="14"></rect>
          <rect y="30" width="80" height="14"></rect>
          <rect y="60" width="80" height="14"></rect>
        </svg>
      </a>
      <Menu></Menu>
    </div>
    <div class="flex">
      <div :class="menu ? 'hidden lg:block' : 'block'">
        <Sidebar></Sidebar>
      </div>
      <div id="content" class="w-full px-8 py-4">
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
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
      console.log(this.menu);
    },
  },
};
</script>

<style></style>
