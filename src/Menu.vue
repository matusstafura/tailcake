<template>
  <div id="nav" class="flex justify-between pb-4">
    <div class="flex">
      <button @click="toggleSidebar">
        <div class="w-8 h-8">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </button>
      <Logo></Logo>
    </div>

    <div class="inline-flex">
      <BuyMeAcoffee></BuyMeAcoffee>
      <Github></Github>
    </div>
  </div>
</template>

<script>
import BuyMeAcoffee from "./buttons/BuyMeAcoffee.vue";
import Github from "./buttons/Github.vue";
import Logo from "./buttons/Logo.vue";
export default {
  data() {
    return {
      sidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
      this.$emit("toggle", this.sidebar);
    },
  },
  components: { BuyMeAcoffee, Github, Logo },
};
</script>

<style></style>
