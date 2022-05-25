<template>
  <div class="bg-gradient-to-r from-blue-50 to-teal-50 via-gray-50">
    <div id="nav" class="flex justify-between px-8 py-8">
      <div class="flex">
        <a href="#" class="text-gray-400" @click="toggleMenu">
          <svg
            class="mr-4 lg:hidden"
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
        <div class="flex">
          <a href="/" class="flex">
            <div class="mr-4">
              <img src="tailcake-logo.png" class="w-8 h-8" />
            </div>
            <div class="m-auto text-xl font-semibold">TailCake</div>
          </a>
        </div>
      </div>
      <Menu></Menu>
    </div>
    <div class="flex">
      <div class="lg:block" :class="sidebar ? 'hidden' : 'block'">
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
      sidebar: true,
    };
  },
  methods: {
    toggleMenu() {
      this.sidebar = !this.sidebar;
      console.log(this.menu);
    },
  },
};
</script>
