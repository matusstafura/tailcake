import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "@/components/Blog.vue";
import Button from "@/components/Button.vue";
import Cta from "@/components/Cta";
import Navbar from "@/components/Navbar.vue";
import Commerce from "@/components/Commerce.vue";
import Breadcrumbs from "@/components/Breadcrumbs";
import Alerts from "@/components/Alerts";
import Footer from "@/components/Footer";
import Table from "@/components/Table";
import Content from "@/components/Content";
import Pagination from "@/components/Pagination";
import Notifications from "@/components/Notifications";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/alerts",
        name: "alerts",
        component: Alerts,
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
        path: "/content",
        name: "content",
        component: Content,
    },
    {
        path: "/cta",
        name: "cta",
        component: Cta,
    },
    {
        path: "/footer",
        name: "footer",
        component: Footer,
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
        path: "/notifications",
        name: "notifications",
        component: Notifications,
    },
    {
        path: "/pagination",
        name: "pagination",
        component: Pagination,
    },
    {
        path: "/tables",
        name: "tables",
        component: Table,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;