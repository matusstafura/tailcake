import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "highlight.js/styles/stackoverflow-light.css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "./assets/css/input.css";
import VueClipboard from "vue-clipboard2";

const app = createApp(App);
app.use(router).use(hljsVuePlugin).use(VueClipboard).mount("#app");

/* read dir */
const req = require.context("./components/Blog", true, /\.(js|vue)$/i);
req.keys().map((key) => {
  const name = key.match(/\w+/)[0];
  app.component(name, req(key).default);
});
