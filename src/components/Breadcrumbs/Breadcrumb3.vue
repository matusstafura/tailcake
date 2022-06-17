<template>
  <Element :title="title" :code="code"></Element>
</template>

<script>
import Element from "../Element.vue";
export default {
  components: { Element },
  name: "With icons",
  data() {
    return {
      code: `
<nav class="block w-full py-2 font-light text-gray-700 dark:bg-gray-500 dark:text-gray-100 sm:flex">
  <div class="flex">
    <div class="w-6 mr-2">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABA0lEQVRIie2UsU4CQRCGv7kY9o5KGrjiMPb2PIQvQWx4AemBx6A6G5+BZ9BSY0FoSKQwwU5joeaWglxYYNeEvU1s7q92Zyf/l5nZXaj135JyoXOuEaZAdpSlmcgNYx9AZKDs5tuzkc79ALsK7tA+BgdaIQykz6wMRH9leyhDMzUDoQEAXXNz5kxLO9A6BxFnikv6kTfQt9Kb39tn0GzC5cXJxvsUPvlKW/YWJXE1cwAhob2O7IA4AAAWcvXybQcoFcBfnsB2i0RANQIAimc7QDW8bs6RBEcFKkj/ocBRQRyi/3zQmy8PASsg0IB5ENm+K/M3HQCvlSv4+X1HF8NqJrVCagNQYDFSAKBXaAAAAABJRU5ErkJggg==" />
    </div>
    <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Downloads</a>

    <div class="hidden mx-2 sm:block">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>

  <div class="flex">
    <div class="w-6 mr-2">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABA0lEQVRIie2UsU4CQRCGv7kY9o5KGrjiMPb2PIQvQWx4AemBx6A6G5+BZ9BSY0FoSKQwwU5joeaWglxYYNeEvU1s7q92Zyf/l5nZXaj135JyoXOuEaZAdpSlmcgNYx9AZKDs5tuzkc79ALsK7tA+BgdaIQykz6wMRH9leyhDMzUDoQEAXXNz5kxLO9A6BxFnikv6kTfQt9Kb39tn0GzC5cXJxvsUPvlKW/YWJXE1cwAhob2O7IA4AAAWcvXybQcoFcBfnsB2i0RANQIAimc7QDW8bs6RBEcFKkj/ocBRQRyi/3zQmy8PASsg0IB5ENm+K/M3HQCvlSv4+X1HF8NqJrVCagNQYDFSAKBXaAAAAABJRU5ErkJggg==" />
    </div>
    <a href="#" class="hover:text-blue-500 dark:hover:text-blue-300">Documents</a>

    <div class="hidden mx-2 sm:block">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>

  <div class="flex">
    <div class="mr-2">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA8UlEQVRIiWNgoDFgRBeo6JmdRpTG//9V//1lOtBZkbKVJAuapiz57G5rzEPIgss3HzA8e/X2//ev38Pay1PXEOMoBgYGBoauWStf/ycCrNt55P+VW/f/d8xY/re8e3YMLvOYiLYZCxDg42FIi/BhEuTlWYjLEoosYGBgYBDkx28JCyWG7z9xkYGbk4OBgYGBQViQj+nL9x+LGBgYllDFAkcLfYav33+giC3asPsjujqyLRDg42EQ4ENNbCxMzH/Q1VEcB4TAqAWjFoxaMGoBEQCjsPvx6zfHqUs3yDLsx6/fHAQt+Pbje/H63UfIsmBAAABTEW7Ikmo6GwAAAABJRU5ErkJggg==" />
    </div>
    <a href="#" class="text-gray-500 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-300">TODO.md</a>
  </div>
</nav>
`,
      title: "With icons",
    };
  },
};
</script>

<style scoped></style>
