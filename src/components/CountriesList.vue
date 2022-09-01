<template>
	<!-- Bootstrap container wrapper div -->
	<div class="container">
		<!-- Bootstrap row wrapper div -->
		<div class="row">
			<!-- Countries List (Bootstrap column) -->
			<div class="col-5" style="max-height: 90vh; overflow: scroll">
				<div class="list-group">
					<router-link class="list-group-item list-group-item-action" :to="`/details/${country.alpha3Code}`" v-for="(country, index) in allCountries" :key="index">
						<img
							:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />

						<p>{{  country.name  }}</p>
					</router-link>
				</div>
			</div>


			<div class="col-7">
				<router-view />
			</div>

		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia'
import MyStore from '../store/MyStore'
export default {
	computed: {
		...mapState(MyStore, ['allCountries'])
	}
}
</script>

<style>
</style>