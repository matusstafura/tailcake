<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Blogpostsl with footer",
  data() {
    return {
      code: `
<div class="p-4">
  <div class="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
    <div class="border rounded-xl">
      <a href="#"><img src="/images/blog/4.jpg" class="object-fill rounded-t-xl" alt="" /></a>
      <div class="p-6">
        <div class="font-semibold text-blue-500 uppercase text-xm">Category</div>
        <h3 class="py-3 text-2xl hover:text-blue-500 dark:text-gray-200">
          <a href="#">Lorem ipsum</a>
        </h3>
        <p class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit, corrupti, tenetur quaerat dolore dolores sit, veniam nostrum quae repellat perferendis ex autem eum facilis numquam tempore iste? Perferendis, reprehenderit!</p>
      </div>
      <div class="flex justify-between p-6 text-sm text-gray-500 border-t dark:text-gray-200">
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" /></svg>
          2022-05-14
        </div>
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" /></svg>
          11
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
          5
        </div>
      </div>
    </div>

    <div class="border rounded-xl">
      <a href="#"><img src="/images/blog/5.jpg" class="rounded-t-xl" alt="" /></a>
      <div class="p-6">
        <div class="font-semibold text-blue-500 uppercase text-xm">Category</div>
        <h3 class="py-3 text-2xl hover:text-blue-500 dark:text-gray-200">
          <a href="#">Lorem ipsum</a>
        </h3>
        <p class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit, corrupti, tenetur quaerat dolore dolores sit, veniam nostrum quae repellat perferendis ex autem eum facilis numquam tempore iste? Perferendis, reprehenderit!</p>
      </div>
      <div class="flex justify-between p-6 text-sm text-gray-500 border-t dark:text-gray-200">
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" /></svg>
          2022-05-14
        </div>
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" /></svg>
          11
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
          5
        </div>
      </div>
    </div>

    <div class="border rounded-xl">
      <a href="#"><img src="/images/blog/6.jpg" class="rounded-t-xl" alt="" /></a>
      <div class="p-6">
        <div class="font-semibold text-blue-500 uppercase text-xm">Category</div>
        <h3 class="py-3 text-2xl hover:text-blue-500 dark:text-gray-200">
          <a href="#">Lorem ipsum</a>
        </h3>
        <p class="text-gray-500 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit, corrupti, tenetur quaerat dolore dolores sit, veniam nostrum quae repellat perferendis ex autem eum facilis numquam tempore iste? Perferendis, reprehenderit!</p>
      </div>
      <div class="flex justify-between p-6 text-sm text-gray-500 border-t dark:text-gray-200">
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" /></svg>
          2022-05-14
        </div>
        <div class="flex items-center gap-x-1">
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" /></svg>
          11
          <svg class="h-4 fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
          5
        </div>
      </div>
    </div>
  </div>
</div>

`,
      title: "Blogposts with footer",
    };
  },
};
</script>

<style scoped></style>
