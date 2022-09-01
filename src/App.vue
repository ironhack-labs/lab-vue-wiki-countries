<template>
	<div class="app">
		<Navbar />
		<CountriesList></CountriesList>
	</div>
</template>

<script>

import MyStore from './store/MyStore';
import CountriesList from './components/CountriesList.vue';
import Navbar from './components/Navbar.vue';
import { mapActions } from 'pinia';
export default {
	name: 'App',
	components: {
		Navbar,
		CountriesList,
	},
	computed: {

	},
	methods: {
		...mapActions(MyStore, ['fetchCountries'])
	},
	created() {
		this.fetchCountries();
	}
}
</script>

<style>
</style>
