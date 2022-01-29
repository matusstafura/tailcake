<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="flex">
    <div id="sidebar" class="w-64 bg-gray-400">
      <a href="#" class="block">Block</a>
      <a href="#">Block</a>
      <a href="#">Block</a>
      <a href="#">Block</a>
    </div>
    <div id="content" class="text-sm">
      <router-view />
    </div>
  </div>
</template>

<style>
#nav {
  background: yellowgreen;
}
</style>
