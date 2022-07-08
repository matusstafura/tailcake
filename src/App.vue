<template>
  <div class="flex py-4">
    <Sidebar :visible="isVisible"></Sidebar>
    <div
      id="content"
      :class="[isVisible ? 'w-full px-8 lg:pl-64' : 'w-full px-8']"
    >
      <Menu @toggle="visible"></Menu>
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
      isVisible: true,
    };
  },
  methods: {
    visible(e) {
      this.isVisible = e;
    },
  },
};
</script>
