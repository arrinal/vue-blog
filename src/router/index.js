import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentView from "@/views/ContentView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/:page(\\d+)',
    name: 'home-page',
    component: HomeView
  },
  {
    path: "/content/:id",
    name: "content",
    component: ContentView,
  },
  {
    path: "/:catchAll(.*)*", // Capture routes yang gak match
    name: 'NotFound',
    component: ErrorView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
