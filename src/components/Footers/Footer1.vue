<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Footer",
  data() {
    return {
      code: `<footer>
<div class="container flex p-4 mx-auto">
  <div class="flex flex-grow w-full dark:text-white">

    <div class="w-1/4 p-4">
      <h3 class="mb-4">About us</h3>
      <p class="text-sm font-light leading-6 text-gray-700 dark:text-white">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.</p>
    </div>

    <div class="w-1/4 p-4">
      <h3 class="mb-4">Quick Links</h3>
      <ul class="text-sm font-light leading-6 text-gray-700 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">My account</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Cart</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Wishlist</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Product Compare</a></li>
      </ul>
    </div>

    <div class="w-1/4 p-4">
      <h3 class="mb-4">Services</h3>
      <ul class="text-sm font-light leading-6 text-gray-700 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">About Us</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Services</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Contact Us</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">FAQs</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Privacy Policy</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Terms and Conditions</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Cookie Policy</a></li>
      </ul>
    </div>

    <div class="w-1/4 p-4">
      <h3 class="mb-4">Contact us</h3>
     <ul class="text-sm font-light leading-6 text-gray-700 list-none dark:text-white">
        <li class="mb-2"><span class="font-semibold">Street Address</span>: 360 Friendship Lane</li>
        <li class="mb-2"><span class="font-semibold">City</span>: Walnut Creek</li>
        <li class="mb-2"><span class="font-semibold">State</span>: CA</li>
        <li class="mb-2"><span class="font-semibold">State Full</span>: California</li>
        <li class="mb-2"><span class="font-semibold">Zipcode</span>: 94597</li>
        <li class="mb-2"><span class="font-semibold">Telephone Number</span>: 408-603-5729</li>
        <li class="mb-2"><span class="font-semibold">Mobile Number</span>: 408-836-7670</li>
      </ul>
    </div>

</div>
</footer>`,
      title: "Footer",
    };
  },
};
</script>

<style scoped></style>
