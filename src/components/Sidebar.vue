<template>
  <div id="sidebar" class="w-64 bg-gray-100 px-4 py-4 h-screen">
    <h2 class="text-lg font-bold pb-4">Elements</h2>
    <router-link to="button" class="block mb-4" @sourceCode="show"
      >Button {{ show }}</router-link
    >
    <h2 class="text-lg font-bold pb-4">Components</h2>
    <router-link to="blog" class="block mb-4">Blog</router-link>
    <router-link to="header" class="block mb-4">Header</router-link>
    <h2 class="text-lg font-bold pb-4">DevTools</h2>
    <router-link to="creator" class="block mb-2">Creator</router-link>
    <router-link to="showcase" class="block mb-2">Showcase</router-link>
  </div>
</template>

<script></script>

<style></style>
