// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import CountryDetails from './views/CountryDetails.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: 'CountryDetails',
    component: CountryDetails,

  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
