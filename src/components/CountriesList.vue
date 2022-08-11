<template>
  <CountryListItem
    v-for="country in countries"
    v-bind:key="country.alpha3Code"
    :name="country?.name?.common"
    :alpha2Code="country.alpha2Code"
    :alpha3Code="country.alpha3Code"
  />
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

  mounted() {
    this.countries = countriesJson;
  },
};
</script>

<style></style>
