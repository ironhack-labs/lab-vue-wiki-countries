import {
	createRouter,
	createWebHistory
} from 'vue-router';

const routes = [

	{
		path: '/',
		name: 'root',
		component: () => import( /* webpackChunkName: 'index' */ './views/index.vue')
	},
	{
		path: '/details/:alpha3Code',
		name: 'details',
		component: () => import( /* webpackChunkName: 'details' */ './components/CountryDetails.vue')

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