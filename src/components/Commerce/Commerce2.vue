<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Product Grid",
  data() {
    return {
      code: `

<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-white">
  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/3.jpg" />
    </div>
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">
        <h3>Shirt</h3>
      </a>
      <p class="text-sm text-gray-500">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/4.jpg" />
    </div>
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">
        <h3>Shirt</h3>
      </a>
      <p class="text-sm text-gray-500">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/5.jpg" />
    </div>
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">
        <h3>Shirt</h3>
      </a>
      <p class="text-sm text-gray-500">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/6.jpg" />
    </div>
    <div class="mt-4">
      <a href="#" class="hover:text-blue-500">
        <h3>Shirt</h3>
      </a>
      <p class="text-sm text-gray-500">Navy Blue</p>
      <p class="text-xl">1220kr</p>
    </div>
  </div>
</div>
`,
      title: "Product Grid",
    };
  },
};
</script>

<style scoped></style>
