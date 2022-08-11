<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
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
</template>

<script>
import CountryListItem from "./CountryListItem.vue";
import countriesJson from "../../public/countries.json";
export default {
  data() {
    return {
      countries: [],
    };
  },
  props: {
    countryList: Array,
  },
  components: { CountryListItem },
  methods: {
    fetchCountries() {
      return countriesJson;
    },
  },
  mounted() {
    this.countries = this.fetchCountries();
  },
};
</script>

<style></style>
