<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Navbar4",
  data() {
    return {
      code: `<div class="relative text-xs leading-4 tracking-normal text-left bg-white border-b border-gray-300 border-solid dark:bg-gray-600">
  <div class="flex items-center w-full px-4 mx-auto tracking-normal text-left">
    <div class="inline-flex items-center justify-start flex-1 leading-4">
      <nav class="box-border block text-left">
        <ul class="box-border p-0 m-0 break-words">
          <li class="box-border relative inline-flex items-center h-10 whitespace-no-wrap">
            <a href="#" class="box-border inline-flex items-center no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">About Us</a>
          </li>
          <li class="box-border relative inline-flex items-center h-10 ml-4 whitespace-no-wrap">
            <a href="#" class="box-border inline-flex items-center no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">My account</a>
          </li>
          <li class="box-border relative inline-flex items-center h-10 ml-4 whitespace-no-wrap">
            <a href="#" class="box-border inline-flex items-center no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">Wishlist</a>
          </li>
          <li class="box-border relative inline-flex items-center h-10 ml-4 whitespace-no-wrap">
            <a href="#" class="box-border inline-flex items-center no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">Order Tracking</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="box-border inline-flex items-center justify-end pl-8 ml-auto leading-4">
      <div class="box-border inline-flex items-center pl-4 ml-4 text-left">
        <span class="box-border ml-8">100% Secure delivery without contacting the courier</span>
      </div>
      <div class="box-border pl-4 ml-4 text-left border-l border-gray-200 border-solid">
        Need help? Call Us: <a href="tel:#" class="">+ 0020 500</a>
      </div>
      <div class="box-border inline-flex items-center pl-4 ml-4 text-left border-l border-gray-200 border-solid">
        <nav class="box-border block">
          <ul class="box-border p-0 m-0 break-words">
            <li class="box-border relative inline-flex items-center h-10 whitespace-no-wrap">
              <a href="#" class="box-border relative inline-flex items-center ml-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">English</a>
              <ul class="box-border absolute invisible px-0 py-4 m-0 bg-white border border-gray-200 border-solid shadow-xs opacity-0 pointer-events-none hover:opacity-100">
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">English</a>
                </li>
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">Spanish</a>
                </li>
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">German</a>
                </li>
              </ul>
            </li>
            <li class="box-border relative inline-flex items-center h-10 ml-4 whitespace-no-wrap">
              <a href="#" class="box-border relative inline-flex items-center ml-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">USD</a>
              <ul class="box-border absolute invisible px-0 py-4 m-0 bg-white border border-gray-200 border-solid shadow-xs opacity-0 pointer-events-none hover:opacity-100">
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">USD</a>
                </li>
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">INR</a>
                </li>
                <li class="box-border flex items-center">
                  <a href="#" class="box-border inline-flex items-center w-full px-8 py-1 font-medium no-underline bg-transparent cursor-pointer hover:text-blue-500 hover:underline">GBP</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>`,
      title: "Navbar top",
    };
  },
};
</script>

<style scoped></style>
