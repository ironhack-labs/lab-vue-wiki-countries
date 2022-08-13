<template>
  <div v-if="alphaCode && country" class="col-7 text-center">
    <img :src="flag" alt="country flag" style="width: 300px" />
    <h1>{{ this.country.name?.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ this.country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <CountryBorders :borders="this.country.borders" />
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="col-7 text-center">
    <TextWithSpinner text="Loading country details" />
  </div>
</template>

<script>
import CountryBorders from "./CountryBorders.vue";
import { getCountryByAlpha3Code } from "../api/countriesApi";
import TextWithSpinner from "./TextWithSpinner.vue";
export default {
  data() {
    return {
      country: null,
    };
  },
  async mounted() {
    this.country = await getCountryByAlpha3Code(this.alphaCode);
  },
  watch: {
    async alphaCode(newAlphaCode) {
      this.country = await getCountryByAlpha3Code(newAlphaCode);
    },
  },

  computed: {
    alphaCode() {
      return this.$route.params.alphaCode;
    },
    flag() {
      return `https://flagcdn.com/w320/${this.country.alpha2Code?.toLowerCase()}.png`;
    },
    capital() {
      return this.country?.capital[0];
    },
  },
  components: { CountryBorders, TextWithSpinner },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
tr > td:nth-child(1) {
  font-weight: 600;
}
</style>
