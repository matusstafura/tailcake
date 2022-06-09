<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With count",
  data() {
    return {
      code: `
<div class="max-w-xl">
  <div class="flex items-center">
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <div class="relative w-64 mx-4 -mt-1">
      <div class="absolute z-10 h-1 w-[100%] bg-gray-300"></div>
      <div class="absolute z-20 h-1 w-[100%] bg-yellow-300"></div>
    </div>
    <span class="text-[0.8rem] text-gray-600">95% (21)</span>
  </div>

  <div class="flex items-center">
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <div class="relative w-64 mx-4 -mt-1">
      <div class="absolute z-10 h-1 w-[100%] bg-gray-300"></div>
      <div class="absolute z-20 h-1 w-[80%] bg-yellow-300"></div>
    </div>
    <span class="text-[0.8rem] text-gray-600">77% (13)</span>
  </div>
  <div class="flex items-center">
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <div class="relative w-64 mx-4 -mt-1">
      <div class="absolute z-10 h-1 w-[100%] bg-gray-300"></div>
      <div class="absolute z-20 h-1 w-[60%] bg-yellow-300"></div>
    </div>
    <span class="text-[0.8rem] text-gray-600">65% (1)</span>
  </div>
  <div class="flex items-center">
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <div class="relative w-64 mx-4 -mt-1">
      <div class="absolute z-10 h-1 w-[100%] bg-gray-300"></div>
      <div class="absolute z-20 h-1 w-[40%] bg-yellow-300"></div>
    </div>
    <span class="text-[0.8rem] text-gray-600">45% (11)</span>
  </div>
  <div class="flex items-center">
    <svg fill="#ffa41d" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <svg fill="#edeef1" class="h-3" xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    <div class="relative w-64 mx-4 -mt-1">
      <div class="absolute z-10 h-1 w-[100%] bg-gray-300"></div>
      <div class="absolute z-20 h-1 w-[20%] bg-yellow-300"></div>
    </div>
    <span class="text-[0.8rem] text-gray-600">12% (1)</span>
  </div>
</div>

`,
      title: "With count",
    };
  },
};
</script>

<style scoped></style>
