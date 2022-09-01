import { defineStore } from 'pinia';

export default defineStore('myStore', {
	state: () => {
		return {
			countries: [],
			selectedCountryCode: null,
			selectedCountry: null
		}
	},
	actions: {
		async fetchCountries() {
			const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
			const data = await response.json();
			this.setCountries(data.reverse());
		},
		setCountries(countries) {
			this.countries = this.mapCountries(countries);
		},
		setSelectedCountry(selectedCountry) {
			this.selectedCountry = selectedCountry;
		},
		mapCountries(countries) {
			return countries.map(country => this.mapCountry(country));
		},
		mapCountry(country) {
			return {
				name: country.name.common,
				alpha3Code: country.alpha3Code,
				alpha2Code: country.alpha2Code,
				capital: country.capital.join(','),
				borders: country.borders,
				area: country.area
			}
		},
		selectCountry(selectedCountryCode) {
			this.selectedCountryCode = selectedCountryCode;
		},
		async fetchSelectedCountry() {
			const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${this.selectedCountryCode}`);
			const data = await response.json();
			this.setSelectedCountry(this.mapCountry(data));
		}
	},
	getters: {
		allCountries() {
			return this.countries;
		},

	},

});