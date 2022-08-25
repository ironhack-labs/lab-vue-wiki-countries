<template>
  <div class="countries-details--container">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`" :alt="`Flag of the ${countryInfo.name}`">
    <h1></h1>
    <p>Capital: {{ }}</p>
    <p>Area: {{ }}</p>
    <router-link v-for="border in countryInfo.borders" :key="border" :to="border">{{ border }}</router-link>
  </div>
</template>

<script>
import countriesData from '/public/countries.json';
export default {
  name: 'CountryDetails',
  data() {
    return {
      countryInfo: null,
    };
  },
  created() {
    const { countryCode } = this.$route.params;
    if (countriesData.length && countryCode){
      const info = countriesData.filter((country) => country.alpha3Code === countryCode)[0];
      this.countryInfo = {
        alpha2Code: info.alpha2Code.toLowerCase(),
        name: info.name.common,
        capital: info.capital[0],
        borders: info.borders,
      }
      console.log(this.countryInfo)
    }
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (countriesData.length && toParams.countryCode) {
          this.countryInfo = countriesData.filter((country) => country.alpha3Code === toParams.countryCode)[0]
        }
      }
    )
  }
}
</script>
