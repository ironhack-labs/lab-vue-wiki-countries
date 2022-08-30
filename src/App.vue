<template>
	<div class="app">
		<Navbar class="navbar-menu" />
	</div>
	<div class="showThing">
		<div class="country-list">
			<CountriesList :countries="getCountry" />
		</div>
		<div class="country-detail">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import countriesData from "../public/countries.json";
	import Navbar from "./components/Navbar.vue";
	import CountriesList from "./components/CountriesList.vue";

	export default {
		name: "App",
		components: { Navbar, CountriesList },

		data() {
			return {
				countries: countriesData,
			};
		},

		computed: {
			getCountry() {
				return this.countries.map((country) => {
					let countryId = 0;
					return {
						id: countryId++,
						name: country.name.common,
						alpha2Code: country.alpha2Code,
						alpha3Code: country.alpha3Code,
					};
				});
			},
		},
	};
</script>

<style>
	.showThing {
		display: flex;
	}
</style>
