import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Creator from "@/components/Creator.vue";
import Blog from "@/components/Blog.vue";
import Button from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";
import Commerce from "@/components/Commerce.vue";
import Breadcrumbs from "@/components/Breadcrumbs";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: Button,
  },
  {
    path: "/breadcrumbs",
    name: "breadcrumbs",
    component: Breadcrumbs,
  },
  {
    path: "/commerce",
    name: "commerce",
    component: Commerce,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/navbars",
    name: "navbars",
    component: Navbar,
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
