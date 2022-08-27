// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../src/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  // {
  //   path: '/list',
  //   name: 'list',
  //   component: () => import(/* webpackChunkName: 'list' */ './pages/CountriesList.vue'),
  //   children: [
  //     {
  //       path: '/details',
  //       name: 'details',
  //       component: () => import(/* webpackChunkName: 'details' */ './pages/CountriesDetails.vue')
  //     },
  //   ]
  // }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});