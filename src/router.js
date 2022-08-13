// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import IndexView from "./pages/IndexView.vue";
import CountriesListView from "./pages/CountriesListView.vue";
import CountryDetailsView from "./pages/CountryDetailsView.vue";
const routes = [
  {
    path: "/",
    name: "root",
    component: IndexView,
  },
  {
    path: "/list",
    name: "list",
    component: CountriesListView,
    children: [
      {
        path: ":alphaCode",
        name: "details",
        component: CountryDetailsView,
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
