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
          <ShowCode></ShowCode>
        </button>
        <button @click="darkMode" class="ml-4">
          <div v-if="!dark">
            <DarkModeLight></DarkModeLight>
          </div>
          <div v-else>
            <DarkModeDark></DarkModeDark>
          </div>
        </button>

        <button @click="copyCode" class="ml-4">
          <CopyButton></CopyButton>
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
import CopyButton from "@/svgs/CopyButton.vue";
import ShowCode from "../svgs/ShowCode.vue";
import DarkModeLight from "../svgs/DarkModeLight.vue";
import DarkModeDark from "../svgs/DarkModeDark.vue";
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
  components: { CopyButton, ShowCode, DarkModeLight, DarkModeDark },
};
</script>

<style></style>
