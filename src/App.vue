<template>
  <div id="nav" class="bg-blue-100 p-4 flex justify-end">
    <router-link to="/" class="px-4">Home</router-link>
    <router-link to="/about" class="px-4">About</router-link>
  </div>
  <div class="flex">
    <div id="sidebar" class="w-64 bg-gray-100 px-4 py-4">
      <h2 class="text-lg font-bold pb-4">Blocks</h2>
      <a href="#" class="block">Buttons</a>
      <a href="#" class="block">Tables</a>
      <a href="#" class="block">Block</a>
      <a href="#" class="block">Block</a>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style></style>
