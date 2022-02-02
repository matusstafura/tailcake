import { createRouter, createWebHistory } from "vue-router";
import Showcase from "@/components/Showcase.vue";
import Home from "../views/Home.vue";
import Creator from "@/components/Creator.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/showcase",
    name: "showcase",
    props: true,
    component: Showcase,
  },
  {
    path: "/creator",
    name: "creator",
    component: Creator,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
