<template>
  <div>
    <h1 class="text-2xl font-bold pb-4">Welcome to TailCake, yay!</h1>
    <p>Feel free to use any of the components under MIT licence.</p>
    <p>asdfj {{ title }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import Buttons from "@/components/Buttons.vue";

export default {
  name: "Home",
  props: {
    title: String,
  },
  components: {
    // Buttons,
  },
};
</script>
