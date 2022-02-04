import { createRouter, createWebHistory } from "vue-router";
import Showcase from "@/components/Showcase.vue";
import Home from "../views/Home.vue";
import Creator from "@/components/Creator.vue";
import Blog from "@/components/Blog.vue";
import Button from "@/components/Button.vue";
import Button2 from "@/components/Button2.vue";
import Header from "@/components/Header.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/showcase",
    name: "showcase",
    component: Showcase,
  },
  {
    path: "/button",
    name: "button",
    component: Button,
  },
  {
    path: "/buttonv2",
    name: "buttonv2",
    component: Button2,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/header",
    name: "header",
    component: Header,
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
