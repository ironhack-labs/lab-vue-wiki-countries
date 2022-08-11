// src/router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () =>
      import(/* webpackChunkName: 'index' */ "./pages/IndexView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: 'list' */ "./pages/CountriesListView.vue"),
    children: [
      {
        path: ":alphaCode",
        name: "details",
        component: () =>
          import(
            /* webpackChunkName: 'details' */ "./pages/CountryDetailsView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
