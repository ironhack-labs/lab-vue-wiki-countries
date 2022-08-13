// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'CountriesList',
    component: () => import('../components/CountriesList.vue'),
    children: [
      {
        path: '/country/:id',
        name: 'CountryDetails',
        component: () => import('../components/CountryDetails.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes
});

export default router;