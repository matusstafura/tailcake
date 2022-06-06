<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Informational 4 columns with divider",
  data() {
    return {
      code: `
<footer class="p-4">
  <div class="grid flex-grow w-full grid-cols-1 pb-8 gap-x-8 gap-y-8 dark:text-white md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    <div>
      <h3 class="mb-4 font-semibold text-gray-400 uppercase">About us</h3>
      <p class="leading-6 text-gray-700 dark:text-white">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.</p>
    </div>

    <div>
      <h3 class="mb-4 font-semibold text-gray-400 uppercase">Quick Links</h3>
      <ul class="leading-6 text-gray-700 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">My account</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Cart</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Wishlist</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Product Compare</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 font-semibold text-gray-400 uppercase">Services</h3>
      <ul class="leading-6 text-gray-700 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">About Us</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Services</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Contact Us</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">FAQs</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Privacy Policy</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Terms and Conditions</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Cookie Policy</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 font-semibold text-gray-400 uppercase">Contact us</h3>
      <ul class="leading-6 text-gray-700 list-none dark:text-white">
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

  <div class="py-8 text-gray-400 border-t dark:text-gray-300 md:justify-between lg:flex">
    <p>© 2022 <a href="#" class="hover:underline">TailCake</a></p>
    <ul class="flex flex-wrap">
      <li><a href="#" class="mr-8 hover:underline">Privacy Policy</a></li>
      <li><a href="#" class="mr-8 hover:underline">Cookie Notice</a></li>
      <li><a href="#" class="mr-8 hover:underline">Conditions of use</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>
      `,
      title: "Informational 4 columns with divider",
    };
  },
};
</script>

<style scoped></style>
