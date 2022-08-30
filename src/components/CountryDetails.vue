<template>

	<div v-if="selectedCountry !== null">
		<img :src="`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`"
			alt="country flag" style="width: 70px" />
		<h1>{{  selectedCountry.name  }}</h1>
		<table class="table">
			<thead></thead>
			<tbody>
				<tr>
					<td style="width: 30%">Capital</td>
					<td>{{  selectedCountry.capital  }}</td>
				</tr>
				<tr>
					<td>Area</td>
					<td>
						{{  selectedCountry.area  }} km <sup>2</sup>
					</td>
				</tr>
				<tr>
					<td>Borders</td>
					<td>
						<p v-if="selectedCountry.borders.length === 0">This country has no borders 🤷‍♂️</p>
						<ul v-else>
							<li v-for="(border, index) in selectedCountry.borders" :key="index">
								<router-link :to="`/details/${border}`">{{  border  }}</router-link>
							</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<script>
import { mapActions, mapState } from 'pinia';
import MyStore from '../store/MyStore';
export default {
	methods: {
		...mapActions(MyStore, ['selectCountry'])
	},
	watch: {
		$route(value, oldValue) {
			this.selectCountry(value.params.alpha3Code)
		}
	},
	created() {
		console.log(this.$route.params.alpha3Code);
		this.selectCountry(this.$route.params.alpha3Code)
	},
	computed: {
		...mapState(MyStore, ['selectedCountry']),
	},
}
</script>

<style>
</style>