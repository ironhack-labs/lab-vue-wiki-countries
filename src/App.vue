<template>
  <div class="app">
    <NavBar></NavBar>
    <CountriesList :countries="getCountry"></CountriesList>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
import CountriesData from "../public/countries.json";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    CountriesList: CountriesList,
  },
  data() {
    return {
      countries: CountriesData,
    };
  },
  computed: {
    getCountry() {
      return this.countries.map((country) => {
        let countryId = 0;
        return {
          id: countryId++,
          name: country.name.common,
          alpha2Code: country.alpha2Code.toLowerCase(),
          alpha3Code: country.alpha3Code,
        };
      });
    },
  },
};
</script>

<style>
</style>
