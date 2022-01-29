<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div id="sidebar">team ecommerce</div>
  <div id="content">
    <router-view />
  </div>
</template>

<style>
#nav {
  background: yellowgreen;
}
</style>
