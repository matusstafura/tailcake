<template>
  <div>
    <h1 class="text-2xl font-bold pb-4" @sourceCode="show">
      Welcome to TailCake, yay!
      {{ show }}
    </h1>
    <p>Feel free to use any of the components under MIT licence.</p>
  </div>
</template>

<script>
export default {
  methods: {
    show(a) {
      console.log(a);
    },
  },
};
</script>
