<template>
  <div id="sidebar" class="w-64 h-screen max-h-screen px-8 py-4">
    <router-link to="alerts" class="block mb-4 hover:underline"
      >Alerts</router-link
    >
    <router-link to="blog" class="block mb-4 hover:underline">Blog</router-link>
    <router-link to="breadcrumbs" class="block mb-4 hover:underline"
      >Breadcrumbs</router-link
    >
    <router-link to="buttons" class="block mb-4 hover:underline"
      >Buttons</router-link
    >
    <router-link to="commerce" class="block mb-4 hover:underline"
      >Commerce</router-link
    >
    <router-link to="content" class="block mb-4 hover:underline"
      >Content</router-link
    >
    <router-link to="cta" class="block mb-4 hover:underline">CTA</router-link>
    <router-link to="footer" class="block mb-4 hover:underline"
      >Footers</router-link
    >
    <router-link to="navbars" class="block mb-4 hover:underline"
      >Navbars</router-link
    >
    <router-link to="pagination" class="block mb-4 hover:underline"
      >Pagination</router-link
    >
    <router-link to="tables" class="block mb-4 hover:underline"
      >Tables</router-link
    >
    <div v-if="dev">
      <h2 class="py-4 text-lg font-bold">DevTools</h2>
      <router-link to="creator" class="block mb-4 hover:underline"
        >Creator</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dev: false,
    };
  },
  created() {
    if (process.env.NODE_ENV === "development") {
      this.dev = true;
    }
  },
};
</script>

<style></style>
