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

/* load components */
const components = [
  require.context("./components/Alerts", false, /\.(js|vue)$/i),
  require.context("./components/Blog", false, /\.(js|vue)$/i),
  require.context("./components/Breadcrumbs", false, /\.(js|vue)$/i),
  require.context("./components/Buttons", false, /\.(js|vue)$/i),
  require.context("./components/Cards", false, /\.(js|vue)$/i),
  require.context("./components/Commerce", false, /\.(js|vue)$/i),
  require.context("./components/Content", false, /\.(js|vue)$/i),
  require.context("./components/Cta", false, /\.(js|vue)$/i),
  require.context("./components/Footers", false, /\.(js|vue)$/i),
  require.context("./components/Navbars", false, /\.(js|vue)$/i),
  require.context("./components/Notifications", false, /\.(js|vue)$/i),
  require.context("./components/Pagination", false, /\.(js|vue)$/i),
  require.context("./components/Pricing", false, /\.(js|vue)$/i),
  require.context("./components/Sidebar", false, /\.(js|vue)$/i),
  require.context("./components/Tables", false, /\.(js|vue)$/i),
];

components.forEach((req) => {
  req.keys().map((key) => {
    const name = key.match(/\w+/)[0];
    app.component(name, req(key).default);
  });
});
