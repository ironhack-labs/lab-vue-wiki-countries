import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'list' */ './components/HomeView.vue'),
  },
  {
    path: '/:id',
    name: 'countrydetail',
    component: () => import(/* webpackChunkName: 'list' */ './components/CountryDetails.vue'),
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