<template>
  <div :class="dark ? 'dark' : ''" class="mb-8 border shadow-lg">
    <div class="relative flex justify-between p-4 border-b bg-gray-50">
      <div
        class="absolute w-full h-full pt-4 -mt-4 -ml-4 text-white bg-green-400"
        v-if="message"
      >
        <p class="text-center align-middle">{{ message }}</p>
      </div>
      <h2 class="justify-start text-xl font-semibold">{{ title }}</h2>
      <div class="flex mt-0">
        <button @click="showCode" class="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </button>
        <button @click="darkMode" class="ml-4">
          <svg
            v-if="!dark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
        </button>

        <button @click="copyCode" class="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-full p-8 bg-white language-html dark:bg-gray-600">
      <div v-html="code"></div>
    </div>
    <div v-show="active">
      <highlightjs
        language="html"
        :code="code"
        class="text-[0.8rem] whitespace-pre-wrap"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["title", "code"],
  data() {
    return {
      active: false,
      dark: "",
      message: "",
    };
  },
  methods: {
    showCode() {
      this.active = !this.active;
    },
    darkMode() {
      this.dark = !this.dark;
    },
    copyCode() {
      this.$copyText(this.code).then(() => {
        this.message = "Copied Succesfully!";
        setTimeout(() => {
          this.message = "";
        }, 1500);
      });
    },
  },
};
</script>

<style></style>
