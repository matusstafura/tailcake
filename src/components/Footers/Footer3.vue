<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Columns with footer",
  data() {
    return {
      code: `

<footer class="p-4">
  <div class="grid flex-grow w-full grid-cols-1 gap-8 pb-8 dark:text-white md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    <div>
      <h3 class="mb-4 font-semibold uppercase">About us</h3>
      <p class="leading-6 text-gray-500 dark:text-white">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.</p>
    </div>

    <div>
      <h3 class="mb-4 font-semibold uppercase">SUPPORT</h3>
      <ul class="leading-6 text-gray-500 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Contact Us</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">FAQs</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Size Guide</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Shipping & Returns</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 font-semibold uppercase">SHOP</h3>
      <ul class="leading-6 text-gray-500 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Men’s Shopping</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Women’s Shopping</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Kids’ Shopping</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Discounts</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 font-semibold uppercase">COMPANY</h3>
      <ul class="leading-6 text-gray-500 list-none dark:text-white">
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Our Story</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Careers</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Terms & Conditions</a></li>
        <li class="mb-2"><a href="#" class="block hover:text-blue-500">Privacy & Cookie policy</a></li>
      </ul>
    </div>
  </div>

  <div class="py-8 border-t dark:text-gray-300 md:justify-between lg:flex">
    <div>© 2022 <a href="#" class="hover:underline">TailCake</a></div>
    <ul class="flex flex-wrap">
      <li><a href="#" class="mr-8 hover:underline">Privacy Policy</a></li>
      <li><a href="#" class="mr-8 hover:underline">Cookie Notice</a></li>
      <li><a href="#" class="mr-8 hover:underline">Conditions of use</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>

      `,
      title: "Columns with footer",
    };
  },
};
</script>

<style scoped></style>
