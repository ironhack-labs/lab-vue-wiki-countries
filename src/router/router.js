import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import( '../components/CountriesList.vue')
  },
  // {
  //   path: '/list',
  //   name: 'list',
  //   // component: () => import(/* webpackChunkName: 'list' */ './pages/CountriesList.vue')
  //   // children: [
  //   //   {
  //   //     path: '/details',
  //   //     name: 'details',
  //   //     component: () => import(/* webpackChunkName: 'details' */ './pages/CountriesDetails.vue')
  //   //   },
  //   // ]
//   }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
export default router
