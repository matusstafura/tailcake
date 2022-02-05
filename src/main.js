import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "./assets/css/input.css";

createApp(App).use(router).use(hljsVuePlugin).mount("#app");
