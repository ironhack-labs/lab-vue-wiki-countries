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
  <TextWithSpinner v-else text="Loading countries" />
</template>

<script>
import CountryListItem from "./CountryListItem.vue";
import * as countriesAPI from "../api/countriesApi.js";
import TextWithSpinner from "./TextWithSpinner.vue";
export default {
  data() {
    return {
      countries: null,
    };
  },
  props: {
    countryList: Array,
  },
  components: { CountryListItem, TextWithSpinner },
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

<style scoped></style>
