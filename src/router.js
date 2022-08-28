// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../src/views/HomeView.vue';
import CountryDetails from '../src/views/CountryDetails.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: 'CountryDetails',
    component: CountryDetails,
  },
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});