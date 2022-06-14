<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "Customer reviews with avatar",
  data() {
    return {
      code: `
<div class="max-w-lg">
  <div class="flex items-center">
    <div class="mr-5">
      <img src="https://tailcake.netlify.app/images/avatars/1.jpg" alt="" class="w-12 h-12 rounded-full" />
    </div>
    <div>
      <p>Hanna Berg</p>
      <p class="text-gray-500">12.10.2022</p>
    </div>
  </div>

  <div class="my-4 ml-16">
    <div class="flex">
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    </div>
    <p class="pb-4 mt-4 ml-1 text-gray-500 border-b">Price was a great value and definitely worth a try. Be careful on the parking but still worth it. Again, I'm in the mood for! Food was great, and the food we ordered was perfect. I love the live entertainment they have.</p>
  </div>

  <div class="flex items-center">
    <div class="mr-5">
      <img src="https://tailcake.netlify.app/images/avatars/1.jpg" alt="" class="w-12 h-12 rounded-full" />
    </div>
    <div>
      <p>Hanna Berg</p>
      <p class="text-gray-500">12.10.2022</p>
    </div>
  </div>

  <div class="my-4 ml-16">
    <div class="flex">
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#ffa41d" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
      <svg fill="#edeef1" class="h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    </div>
    <p class="mt-4 ml-1 text-gray-500">Some review</p>
  </div>
</div>


`,
      title: "Customer reviews with avatar",
    };
  },
};
</script>

<style scoped></style>
