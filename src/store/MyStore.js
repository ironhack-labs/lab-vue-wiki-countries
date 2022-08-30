import {
	defineStore
} from 'pinia';

export default defineStore('myStore', {
	state: () => {
		return {
			countries: [],
			selectedCountryCode: null,
		}
	},
	actions: {
		async fetchCountries() {
			const response = await fetch('/countries.json');
			const data = await response.json();
			this.setCountries(data);
		},
		setCountries(countries) {
			this.countries = this.mapCountries(countries);
		},
		mapCountries(countries) {
			let countryId = 0;
			return countries.map(data => {
				return {
					id: countryId++,
					name: data.name.common,
					alpha3Code: data.alpha3Code,
					alpha2Code: data.alpha2Code,
					capital: data.capital.join(','),
					borders: data.borders,
					area: data.area
				}
			});
		},
		selectCountry(selectedCountryCode) {
			this.selectedCountryCode = selectedCountryCode;
		}
	},
	getters: {
		allCountries() {
			return this.countries;
		},
		selectedCountry() {
			return this.countries.find(country => country.alpha3Code === this.selectedCountryCode);
		}
	},

});