<template>
  <div
    v-if="this.countries"
    class="col-5"
    style="max-height: 90vh; overflow: scroll"
  >
    <div class="list-group text-center">
      <CountryListItem
        v-for="country in countries"
        v-bind:key="country.alpha3Code"
        :name="country?.name?.common"
        :alpha2Code="country.alpha2Code"
        :alpha3Code="country.alpha3Code"
      />
    </div>
  </div>
  <div class="loading" v-else>
    Loading countries
    <div class="spinner"></div>
  </div>
</template>

<script>
import CountryListItem from "./CountryListItem.vue";
import * as countriesAPI from "../api/countriesApi.js";
export default {
  data() {
    return {
      countries: null,
    };
  },
  props: {
    countryList: Array,
  },
  components: { CountryListItem },
  methods: {
    async fetchCountries() {
      return countriesAPI.sortCountries(await countriesAPI.getAllCountries());
    },
  },
  async created() {
    this.countries = await this.fetchCountries();
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-flow: row;
}
.spinner {
  margin-left: 1rem;
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
