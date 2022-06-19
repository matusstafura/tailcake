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
<div class="grid grid-cols-1 gap-x-8 gap-y-8 dark:text-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/a1.jpg" alt="product-image" class="rounded-xl" />
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="text-sm text-gray-500 uppercase">shoes</div>
      <div class="flex">
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
    </div>
    <h2 class="py-4 text-2xl font-semibold">
      <a href="/product">Air Sneakers</a>
    </h2>
    <p class="text-gray-500">USD55.00</p>
  </div>

  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/a2.jpg" alt="product-image" class="rounded-xl" />
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="text-sm text-gray-500 uppercase">shoes</div>
      <div class="flex">
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
    </div>
    <h2 class="py-4 text-2xl font-semibold">
      <a href="/product">Air Sneakers</a>
    </h2>
    <p class="text-gray-500">USD55.00</p>
  </div>

  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/a3.jpg" alt="product-image" class="rounded-xl" />
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="text-sm text-gray-500 uppercase">shoes</div>
      <div class="flex">
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
    </div>
    <h2 class="py-4 text-2xl font-semibold">
      <a href="/product">Air Sneakers</a>
    </h2>
    <p class="text-gray-500">USD55.00</p>
  </div>

  <div>
    <div>
      <img src="https://tailcake.netlify.app/images/commerce/a4.jpg" alt="product-image" class="rounded-xl" />
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="text-sm text-gray-500 uppercase">shoes</div>
      <div class="flex">
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
        <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      </div>
    </div>
    <h2 class="py-4 text-2xl font-semibold">
      <a href="/product">Air Sneakers</a>
    </h2>
    <p class="text-gray-500">USD55.00</p>
  </div>
</div>


`,
      title: "Product Grid",
    };
  },
};
</script>

<style scoped></style>
